import * as types from './types';

export function ballMove(ball) {
    return {
        type: types.BALL_MOVE,
        payload: ball
    };
}

export function updatePaddleX(coords) {
    console.warn('updatePaddleX', coords);
    return {
        type: types.UPDATE_PADDLE_X,
        payload: coords
    };
}