import * as types from './types';
import { firebaseRef } from './../firebase/index';

export function ballMove(ball) {
	return {
		type: types.BALL_MOVE,
		payload: ball
	};
}

export function updatePaddleX(coords) {
	return {
		type: types.UPDATE_PADDLE_X,
		payload: coords
	};
}

export function createBrickGrid(numberOfBricks) {
	let brickGrid = new Array(numberOfBricks);
	return {
		type: types.CREATE_BRICK_GRID,
		payload: brickGrid
	};
}

export function updateBrickGrid(brickGrid) {
	return {
		type: types.UPDATE_BRICK_GRID,
		payload: brickGrid
	};
}

export function updateBricksLeft(total) {
	return {
		type: types.UPDATE_BRICKS_LEFT,
		payload: total
	};
}

export function updateScore(score) {
	return {
		type: types.UPDATE_SCORE,
		payload: score
	};
}

export function readHighScore(score) {
	return function(dispatch) {
		let batandballRef = firebaseRef.child('/batandball/').once('value');

		return batandballRef.then(function(snapshot) {
			dispatch({
				type: types.UPDATE_HIGH_SCORE,
				payload: snapshot.val()
			});
		});
	};
}

export function updateHighScore(highScore) {
	firebaseRef.child('/batandball/').set(highScore);
	return {
		type: types.UPDATE_HIGH_SCORE,
		payload: highScore
	};
}

export function updateLives(lives) {
	return {
		type: types.UPDATE_LIVES,
		payload: lives
	};
}

export function updateLevel(level) {
	return {
		type: types.UPDATE_LEVEL,
		payload: level
	};
}

export function updateGameState(state) {
	return {
		type: types.UPDATE_GAME_STATE,
		payload: state
	};
}
