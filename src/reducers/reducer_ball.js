import * as types from '../actions/types';

const INITIAL_STATE = {
	ballX: 75,
	ballSpeedX: 5,
	ballY: 75,
	ballSpeedY: 7,
	ballSize: 7
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.BALL_MOVE:
			return {
				...state,
				ballX: action.payload.ballX,
				ballSpeedX: action.payload.ballSpeedX,
				ballY: action.payload.ballY,
				ballSpeedY: action.payload.ballSpeedY
			};
		default:
			return state;
	}
}
