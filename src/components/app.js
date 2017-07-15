import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ballMove,
    createBrickGrid,
    updateBrickGrid,
    updateBricksLeft,
    updateScore,
    updateLives,
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
            this.props.createBrickGrid(this.props.bricks.BRICK_COLS * this.props.bricks.BRICK_ROWS);
            this.brickReset();
            this.resetBall();
            let framesPerSecond = 30;
            setInterval(this.updateAll.bind(this), 1000/framesPerSecond);
        }
    }

    componentDidUpdate() {

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
            console.warn('hit left');
            ballSpeedX *= -1;
        }
        if(ballX > 800 && ballSpeedX > 0.0) {
            // check if hit right hand side of canvas
            console.warn('hit right');
            ballSpeedX *= -1;
        }

        if(ballY < 0 && ballSpeedY < 0.0) {
            // check if hit top of canvas
            console.warn('hit top');
            ballSpeedY *= -1; // = -ballSpeedX
        }
        if(ballY > this.state.playArea.height && ballSpeedY > 0.0) {
            // check if hit bottom of canvas
            console.warn('hit bottom');
            // ballSpeedY *= -1; // = -ballSpeedX
            if(this.props.game.lives > 0) {
                // decrease lives by 1
                this.resetBall();
                this.props.updateLives(this.props.game.lives - 1);
                return;
            } else {
                console.warn('Game Over');
                this.game('gameover'); // clear interval
                this.props.updateGameState('gameover');
                return;
            }
        }
        // if(ballY > canvas.height) {
        //     // check if hit bottom of canvas
        //     if(numberOfLives > 0) {
        //         resetBall();
        //         brickReset();
        //         numberOfLives--;
        //     } else {
        //         resetScore();
        //     }
        //
        // }

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
                // this.props.ball.ballSpeedY *= -1; // return ball


                let centerOfPaddleX = this.props.paddle.paddleX + this.props.paddle.PADDLE_WIDTH/2; // centre of paddle
                var ballDistFromPaddleCenterX = this.props.ball.ballX - centerOfPaddleX; // get postion of ball on paddle
                this.props.ball.ballSpeedX = ballDistFromPaddleCenterX * 0.35; // max speed could be +/- 50, so muliply by 0.35 to prevent being too fast

                // update ball
                this.props.ballMove({
                    ballX: this.props.ball.ballX,
                    ballSpeedX: this.props.ball.ballSpeedX = ballDistFromPaddleCenterX * 0.35,
                    ballY: this.props.ball.ballY,
                    ballSpeedY: this.props.ball.ballSpeedY *= -1
                });

                if(this.props.bricks.bricksLeft === 0) {
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
                this.props.updateScore(this.props.game.score + 25);
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
            // if(Math.random() < 0.5) {
            //     brickGrid[i] = true;
            // } else {
            //     brickGrid[i] = false;
            // } // end of else (rand check)
            brickGrid[i] = true;
            bricksLeft++;
        } // end of brick

        // update state with new brickGrid
        this.props.updateBrickGrid(brickGrid);
    }

    handleKeyUp(event, state) {
        console.log('key up', event);
        this.props.updateGameState(state);
    }
    handleClick(state, event) {
        this.props.updateGameState(state);
        if(state === 'play') {
            this.game('play');
        } else if(state = 'intro') {
            // moving from gameover to intro state, so reset score and lives
            this.props.updateLives(3);
            this.props.updateScore(0);
        }
    }
    game(state) {
        // let game = 0;
        if(state === 'play') {
            this.props.createBrickGrid(this.props.bricks.BRICK_COLS * this.props.bricks.BRICK_ROWS);
            this.brickReset();
            this.resetBall();
            let framesPerSecond = 30;
            this.intervalId = setInterval(this.updateAll.bind(this), 1000/framesPerSecond);
            console.log('interval set', this.intervalId);
        } else if(state === 'gameover') {
            console.log('interval cleared', this.intervalId);
            clearInterval(this.intervalId);
        }
    }
    renderGameState(state) {
        switch(state) {
            case 'intro':
                return(
                    <div><h1 onKeyUp={this.handleKeyUp.bind(this, 'play')} onClick={this.handleClick.bind(this, 'play')}>Cick to start</h1></div>
                );
            case 'play':
                return(
                    <DisplayPlayArea score={this.props.game.score} lives={this.props.game.lives} ball={this.props.ball} paddle={this.props.paddle} playArea={this.state.playArea} bricks={this.props.bricks} />
                );
            case 'gameover':
                return(
                    <div>
                        <h1>GAME OVER!</h1>
                        <h1>You Scored {this.props.game.score}</h1>
                        <h1 onKeyUp={this.handleKeyUp.bind(this, 'intro')} onClick={this.handleClick.bind(this, 'intro')}>Click to try again.</h1>
                    </div>
                );
        }
    }

    render() {
        return (
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                  {this.renderGameState(this.props.game.gameState)}
              </div>
              <div className="col-md-2"></div>
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

export default connect(mapStateToProps, { ballMove, createBrickGrid, updateBrickGrid, updateBricksLeft, updateScore, updateLives, updateGameState })(App);