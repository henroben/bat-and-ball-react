import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ballMove } from '../actions';

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
        let framesPerSecond = 30;
        setInterval(this.updateAll.bind(this), 1000/framesPerSecond);
    }

    updateAll() {
        this.ballMove();
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
        if(ballY > 600 && ballSpeedY > 0.0) {
            // check if hit bottom of canvas
            console.warn('hit bottom');
            ballSpeedY *= -1; // = -ballSpeedX
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

                // if(bricksLeft == 0) {
                //     brickReset();
                // } // out of bricks
            }
        }
    }

    render() {
        return (
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                    <DisplayPlayArea score="0" lives="0" ball={this.props.ball} paddle={this.props.paddle} playArea={this.state.playArea} />
              </div>
              <div className="col-md-2"></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return {
        ...state,
        ball: state.ball,
        paddle: state.paddle
    };
}

export default connect(mapStateToProps, { ballMove })(App);