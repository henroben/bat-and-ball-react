import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateHighScore } from './../actions';

class DisplayHighScoreTable extends Component {


    handleFormClick(index) {
        let highScoreTable = this.props.highscore;
        highScoreTable[index].name = this.textInput.value;
        this.props.updateHighScore(highScoreTable);
    }

    addScorePosition(score, index) {
        if(score.name === null) {
            // no name, so add form
            return(
                <div className="row">
                    <div className="col-xs-2">
                        {index + 1}
                    </div>
                    <div className="col-xs-5">
                        <input type="text" ref={(input) => { this.textInput = input; }} placeholder="Enter Your Name" />
                    </div>
                    <div className="col-xs-5">
                        <button className="btn btn-primary" onClick={this.handleFormClick.bind(this, index)}>SAVE</button>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="row">
                    <div className="col-xs-2">
                        {index + 1}
                    </div>
                    <div className="col-xs-5">
                        {score.name}
                    </div>
                    <div className="col-xs-5">
                        {score.score}
                    </div>
                </div>
            );
        }
    }

    isNewHighScore(scoreTable) {
        return scoreTable.map((score, index) => {
            return <li className="list-group-item">
                {this.addScorePosition(score, index)}
             </li>
        });
    }

    render() {
        return(
            <ul className="list-group high-score">
                {this.isNewHighScore(this.props.highscore)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return {
        ...state
    };
}

export default connect(mapStateToProps, { updateHighScore })(DisplayHighScoreTable);