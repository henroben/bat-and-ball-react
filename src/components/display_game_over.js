import React, { Component } from 'react';
import DisplayHighScoreTable from './display_high_score_table';

export default class DisplayGameOver extends Component {

    render() {
        return(
            <div className="bat-and-ball-game-over">
                <h1>GAME OVER!</h1>
                <div className="col-xs-hidden col-md-3"></div>
                <div className="col-xs-12 col-md-6">
                    <DisplayHighScoreTable highscore={this.props.highscore} />
                    <p>You got to Level {this.props.level} and scored {this.props.score} points!!</p>
                    <button className="btn btn-primary btn-block" onClick={this.props.handleClick}>CLICK TO PLAY AGAIN</button>
                </div>
                <div className="col-xs-hidden col-md-3"></div>
            </div>
        );
    }
}