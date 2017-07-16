import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayIntro from './display_intro';
import {
    ballMove,
    createBrickGrid,
    updateBrickGrid,
    updateBricksLeft,
    updateScore,
    updateHighScore,
    updateLives,
    updateLevel,
    updateGameState
} from '../actions';

import DisplayPlayArea from './display_play_area';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playArea: {
                width: 800,
                height: 600
            }
        };
    }

    componentDidMount() {
        if(this.props.game.gameState === 'play') {
            // create the initial brick grid
            this.props.createBrickGrid(this.props.bricks.BRICK_COLS * this.props.bricks.BRICK_ROWS);
            this.brickReset();
            this.resetBall();
            let framesPerSecond = 30;
            setInterval(this.updateAll.bind(this), 1000/framesPerSecond);
        }
    }

    componentWillUnmount() {
        // unmounting component, so make sure interval is cleared
        clearInterval(this.intervalId);
    }

    updateAll() {
        this.ballMove();
        this.ballBrickHandler();
        this.ballPaddleHandler();
    }

    ballMove() {
        let ballX = this.props.ball.ballX;
        let ballY = this.props.ball.ballY;
        let ballSpeedX = this.props.ball.ballSpeedX;
        let ballSpeedY = this.props.ball.ballSpeedY;

        // update position
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // collision detection
        if(ballX < 0 && ballSpeedX < 0.0) {
            // check if hit left hand side of canvas
            ballSpeedX *= -1;
        }
        if(ballX > 800 && ballSpeedX > 0.0) {
            // check if hit right hand side of canvas
            ballSpeedX *= -1;
        }

        if(ballY < 0 && ballSpeedY < 0.0) {
            // check if hit top of canvas
            ballSpeedY *= -1; // = -ballSpeedX
        }
        if(ballY > this.state.playArea.height && ballSpeedY > 0.0) {
            // check if hit bottom of canvas
            if(this.props.game.lives > 0) {
                // decrease lives by 1
                this.resetBall();
                this.props.updateLives(this.props.game.lives - 1);
                return;
            } else {
                // run out of lives, GAME OVER MAN!
                this.game('gameover'); // clear interval
                if(this.props.game.score > this.props.game.highScore) {
                    // Player achieved new high score
                    this.props.updateHighScore(this.props.game.score);
                }
                this.props.updateGameState('gameover');
                return;
            }
        }

        // set the state
        this.props.ballMove({
            ballX,
            ballSpeedX,
            ballY,
            ballSpeedY
        });

    }

    ballPaddleHandler() {
        // work out bounding box of paddle
        if(this.state.playArea.height) {
            let paddleTopEdgeY = this.state.playArea.height-this.props.paddle.PADDLE_DIST_FROM_EDGE;
            let paddleBottomEdgeY = paddleTopEdgeY + this.props.paddle.PADDLE_THICKNESS;
            let paddleLeftEdgeX = this.props.paddle.paddleX;
            let paddleRightEdgeX = this.props.paddle.paddleX + this.props.paddle.PADDLE_WIDTH;
            if( this.props.ball.ballY+this.props.ball.ballSize > paddleTopEdgeY &&       // below top of paddle
                this.props.ball.ballY+this.props.ball.ballSize < paddleBottomEdgeY &&    // above bottom of paddle
                this.props.ball.ballX+this.props.ball.ballSize > paddleLeftEdgeX &&      // right of left side of paddle
                this.props.ball.ballX+this.props.ball.ballSize < paddleRightEdgeX        // left of right side of paddle
            ) {
                // collision with paddle

                let centerOfPaddleX = this.props.paddle.paddleX + this.props.paddle.PADDLE_WIDTH/2; // centre of paddle
                var ballDistFromPaddleCenterX = this.props.ball.ballX - centerOfPaddleX; // get postion of ball on paddle
                this.props.ball.ballSpeedX = ballDistFromPaddleCenterX * 0.35 * (this.props.game.level / 3); // max speed could be +/- 50, so muliply by 0.35 to prevent being too fast

                // update ball
                this.props.ballMove({
                    ballX: this.props.ball.ballX,
                    ballSpeedX: this.props.ball.ballSpeedX = ballDistFromPaddleCenterX * 0.35 * (this.props.game.level / 3),
                    ballY: this.props.ball.ballY,
                    ballSpeedY: this.props.ball.ballSpeedY *= -1
                });

                if(this.props.bricks.bricksLeft === 0) {
                    // advance level
                    this.props.updateLevel(this.props.game.level + 1);
                    if(this.props.game.level / 3 === 1) {
                        // increase lives by 1 every three levels
                        this.props.updateLives(this.props.game.lives + 1);
                    }
                    // reset the bricks
                    this.brickReset();
                } // out of bricks

            }
        }
    }

    resetBall() {
        'use strict';
        // reset ball to middle of screen
        this.props.ballMove({
            ballX: this.state.playArea.width/2,
            ballSpeedX: this.props.ball.ballSpeedX,
            ballY: this.state.playArea.height/2,
            ballSpeedY: this.props.ball.ballSpeedY
        });
    }

    ballBrickHandler() {
        'use strict';
        // ball / brick collision detection
        var ballBrickCol = Math.floor(this.props.ball.ballX / this.props.bricks.BRICK_W);
        var ballBrickRow = Math.floor(this.props.ball.ballY / this.props.bricks.BRICK_H);
        var brickIndexUnderBall = this.rowColToArrayIndex(ballBrickCol, ballBrickRow);

        // check if index under ball is within brick grid, fix to check that col/row is not neg number, so doesn't remove brick on opposite side
        if( ballBrickCol >= 0 && ballBrickCol < this.props.bricks.BRICK_COLS &&
            ballBrickRow >= 0 && ballBrickRow < this.props.bricks.BRICK_ROWS) {

            // check to see if brick is true
            if(this.isBrickAtColRow(ballBrickCol, ballBrickRow)) {
                let brickGrid = this.props.bricks.brickGrid;
                let bricksLeft = this.props.bricks.bricksLeft;
                let ballSpeedX = this.props.ball.ballSpeedX;
                let ballSpeedY = this.props.ball.ballSpeedY;
                // is brick there, so set to false (remove)
                brickGrid[brickIndexUnderBall] = false;
                this.props.updateBrickGrid(brickGrid);

                // update score
                let brickScore = (50 -ballBrickRow) * this.props.game.level;
                this.props.updateScore(this.props.game.score + brickScore);
                // remove brick from count
                bricksLeft--; // remove brick from count
                this.props.updateBricksLeft(bricksLeft);

                // check face ball hit & bounce off in reverse direction
                // work out previous frame position
                var prevBallX = this.props.ball.ballX - this.props.ball.ballSpeedX;
                var prevBallY = this.props.ball.ballY - this.props.ball.ballSpeedY;
                var prevBrickCol = Math.floor(prevBallX / this.props.bricks.BRICK_W);
                var prevBrickRow = Math.floor(prevBallY / this.props.bricks.BRICK_H);

                var bothTestsFailed = true;

                // check if column changed
                if(prevBrickCol != ballBrickCol) {
                    if(this.isBrickAtColRow(prevBrickCol, ballBrickRow) === false) {
                        // check to see if brick missing to the side
                        ballSpeedX *= -1; // return ball
                        bothTestsFailed = false;
                    }
                }
                // check if row changed
                if(prevBrickRow != ballBrickRow) {
                    if(this.isBrickAtColRow(ballBrickCol, prevBrickRow) === false) {
                        ballSpeedY *= -1; // return ball
                        bothTestsFailed = false;
                    }
                }
                if(bothTestsFailed) {
                    // both edges failed, hit brick corner from inside, so send back the way it came
                    ballSpeedX *= -1; // return ball
                    ballSpeedY *= -1; // return ball
                    // TODO could remove adjacent bricks here
                }

                // update the state.
                this.props.ballMove({
                    ballX: this.props.ball.ballX,
                    ballY: this.props.ball.ballY,
                    ballSpeedX,
                    ballSpeedY
                });

            } // end of brick found
        } // end of valid col and row
    }

    rowColToArrayIndex(col, row) {
        'use strict';
        return col + this.props.bricks.BRICK_COLS * row;
    }

    isBrickAtColRow(col, row) {
        'use strict';
        if( col >= 0 && col < this.props.bricks.BRICK_COLS &&
            row >= 0 && row < this.props.bricks.BRICK_ROWS) {

            var brickIndexUnderCoord = this.rowColToArrayIndex(col, row);

            return this.props.bricks.brickGrid[brickIndexUnderCoord];
        } else {
            // is outside grid, so return false
            return false;
        }
    }

    brickReset() {
        'use strict';
        let i;
        let brickGrid = this.props.bricks.brickGrid;

        for(i=0; i < 3*this.props.bricks.BRICK_COLS; i++) {
            // create top gutter
            brickGrid[i] = false;
        }

        let bricksLeft = 0;

        for(i;i<this.props.bricks.BRICK_COLS * this.props.bricks.BRICK_ROWS;i++) {
            brickGrid[i] = true;
            bricksLeft++;
        } // end of brick

        // update state with new brickGrid
        this.props.updateBrickGrid(brickGrid);
        this.props.updateBricksLeft(bricksLeft);
    }

    handleClick(state, event) {
        this.props.updateGameState(state);
        if(state === 'play') {
            this.game('play');
        } else if(state = 'intro') {
            // moving from gameover to intro state, so reset score, lives and level
            this.props.updateLives(2);
            this.props.updateScore(0);
            this.props.updateLevel(1);
        }
    }

    game(state) {
        if(state === 'play') {
            // New game, so create new brick grid, reset & draw bricks, reset ball, set interval
            this.props.createBrickGrid(this.props.bricks.BRICK_COLS * this.props.bricks.BRICK_ROWS);
            this.brickReset();
            this.resetBall();
            let framesPerSecond = 30;
            this.intervalId = setInterval(this.updateAll.bind(this), 1000/framesPerSecond);
        } else if(state === 'gameover') {
            // Game over, so clear interval
            clearInterval(this.intervalId);
        }
    }
    // Handles Introduction / Playing Game / Game Over States
    renderGameState(state) {
        switch(state) {
            case 'intro':
                return(
                    <div>
                        <DisplayIntro handleClick={this.handleClick.bind(this, 'play')} />
                    </div>
                );
            case 'play':
                return(
                    <DisplayPlayArea score={this.props.game.score} lives={this.props.game.lives} level={this.props.game.level} ball={this.props.ball} paddle={this.props.paddle} playArea={this.state.playArea} bricks={this.props.bricks} />
                );
            case 'gameover':
                return(
                    <div>
                        <h1>GAME OVER!</h1>
                        <h1>You Got To Level {this.props.game.level}</h1>
                        <h1>And Scored {this.props.game.score} Points!</h1>
                        <h1>Current High Score is {this.props.game.highScore}</h1>
                        <button className="btn btn-primary" onClick={this.handleClick.bind(this, 'intro')}>TRY AGAIN</button>
                    </div>
                );
        }
    }

    render() {
        return (
            <div className="row">
              <div className="col-xs-hidden col-md-1"></div>
              <div className="col-xs-12 col-md-10">
                  {this.renderGameState(this.props.game.gameState)}
              </div>
              <div className="col-xs-hidden col-md-1"></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state.bricks.brickGrid);
    return {
        ...state,
        ball: state.ball,
        paddle: state.paddle,
        bricks: state.bricks,
        game: state.game
    };
}

export default connect(mapStateToProps, {
    ballMove,
    createBrickGrid,
    updateBrickGrid,
    updateBricksLeft,
    updateScore,
    updateHighScore,
    updateLives,
    updateGameState,
    updateLevel })(App);