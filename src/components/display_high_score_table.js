import React from 'react';

export default (props) => {
    "use strict";
    function addScorePosition(score, index) {
        if(score.name === null) {
            // no name, so add form
            return(
                <div className="row">
                    <div className="col-xs-2">
                        {index + 1}
                    </div>
                    <div className="col-xs-5">
                        <input type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="col-xs-5">
                        <button className="btn btn-primary">SAVE</button>
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
    function isNewHighScore(scoreTable) {
        console.log('isNewHighScore', scoreTable);
        return scoreTable.map((score, index) => {
            return <li className="list-group-item">
                {addScorePosition(score, index)}
             </li>
        });
    }
    return(
        <ul className="list-group high-score">
            {isNewHighScore(props.highscore)}
        </ul>
    );
}