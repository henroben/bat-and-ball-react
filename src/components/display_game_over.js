import React from 'react';
import DisplayHighScoreTable from './display_high_score_table';

const DisplayGameOver = ({ highscore, level, score, handleClick }) => {
	return (
		<div className="bat-and-ball-game-over">
			<h1>GAME OVER!</h1>
			<div className="col-xs-hidden col-md-3" />
			<div className="col-xs-12 col-md-6">
				<DisplayHighScoreTable highscore={highscore} />
				<p>
					You got to Level {level} and scored {score} points!!
				</p>
				<button className="btn btn-primary btn-block" onClick={handleClick}>
					CLICK TO PLAY AGAIN
				</button>
			</div>
			<div className="col-xs-hidden col-md-3" />
		</div>
	);
};

export default DisplayGameOver;
