import * as types from '../actions/types';

const INITIAL_STATE = {
    PADDLE_WIDTH: 100,
    PADDLE_THICKNESS: 10,
    PADDLE_DIST_FROM_EDGE: 60,
    paddleX: 400
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.UPDATE_PADDLE_X:
            console.warn('paddle reducer', action);
            return {
                ...state,
                paddleX: action.payload
            }
        default:
            return state;
    }
}