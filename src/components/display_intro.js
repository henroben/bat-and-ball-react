import React, { Component } from 'react';
import DisplayHighScoreTable from './display_high_score_table';

export default class DisplayIntro extends Component {
    render() {
        return(
            <div className="bat-and-ball-intro-screen">
                <h1>BAT AND BALL!</h1>
                <div className="col-xs-3"></div>
                <div className="col-xs-6">
                    <DisplayHighScoreTable highscore={this.props.highscore.table} />
                    <p>The classic through the wall game. Use your mouse to bounce the ball up to the wall to remove the bricks and increase your score.</p>
                    <p>You start with 3 lives, an extra life is awarded every 3 levels, but be careful, the ball gets faster as you progress further!</p>
                    <button className="btn btn-primary btn-block" onClick={this.props.handleClick}>CLICK TO PLAY</button>
                </div>
                <div className="col-xs-3"></div>

            </div>
        );
    }
}