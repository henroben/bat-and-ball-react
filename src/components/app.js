import React, { Component } from 'react';

import DisplayPlayArea from './display_play_area';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playArea: {
                width: 800,
                height: 600
            },
            ball: {
                ballX: 75,
                ballSpeedX: 5,
                ballY: 75,
                ballSpeedY: 7,
                ballSize: 7
            }
        };
    }

    componentDidMount() {
        let framesPerSecond = 30;
        setInterval(this.updateAll.bind(this), 1000/framesPerSecond);
    }

    updateAll() {
        let ballX = this.state.ball.ballX;
        let ballY = this.state.ball.ballY;
        let ballSpeedX = this.state.ball.ballSpeedX;
        let ballSpeedY = this.state.ball.ballSpeedY;
        this.ballMove(ballX, ballY, ballSpeedX, ballSpeedY);
    }

    ballMove(ballX, ballY, ballSpeedX, ballSpeedY) {

        // update position
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // collision detection
        if(ballX < 0 && ballSpeedX < 0.0) {
            // check if hit left hand side of canvas
            console.warn('hit left');
            ballSpeedX *= -1;
        }
        if(this.state.ball.ballX > 800 && ballSpeedX > 0.0) {
            // check if hit right hand side of canvas
            console.warn('hit right');
            ballSpeedX *= -1;
        }

        if(ballY < 0 && ballSpeedY < 0.0) {
            // check if hit top of canvas
            ballSpeedY *= -1; // = -ballSpeedX
        }
        if(ballY > 600 && ballSpeedY > 0.0) {
            // check if hit bottom of canvas
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
        this.setState({
            ball: {
                ...this.state.ball,
                ballX,
                ballSpeedX,
                ballY,
                ballSpeedY
            }
        });
    }
    render() {
        return (
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                    <DisplayPlayArea score="0" lives="0" ball={this.state.ball} />
              </div>
              <div className="col-md-2"></div>
            </div>
        );
    }
}
