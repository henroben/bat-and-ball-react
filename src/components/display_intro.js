import React, { Component } from 'react';
import DisplayHighScoreTable from './display_high_score_table';

export default class DisplayIntro extends Component {

    render() {
        return(
            <div className="bat-and-ball-intro-screen">
                <h1>BAT AND BALL!</h1>
                <div className="col-xs-hidden col-md-3"></div>
                <div className="col-xs-12 col-md-6">
                    <DisplayHighScoreTable highscore={this.props.highscore.table} />
                    <p>The classic through the wall game. Use your mouse to bounce the ball up to the wall to remove the bricks and increase your score.</p>
                    <p>You start with 3 lives, an extra life is awarded every 3 levels, but be careful, the ball gets faster as you progress further!</p>
                    <div className="col-xs-6">
                        <button className="btn btn-primary btn-block full-screen" onClick={this.props.goFullScreen}><span>FULL SCREEN</span></button>
                    </div>
                    <div className="col-xs-6">
                        <button className="btn btn-success btn-block click-to-play" onClick={this.props.handleClick}><span>CLICK TO PLAY</span></button>
                    </div>
                </div>
                <div className="col-xs-hidden col-md-3"></div>

            </div>
        );
    }
}