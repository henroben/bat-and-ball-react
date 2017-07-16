import * as types from '../actions/types';

const INITIAL_STATE = {
    BRICK_W: 80,
    BRICK_H: 20,
    BRICK_GAP: 2,
    BRICK_COLS: 10,
    BRICK_ROWS: 13,
    brickGrid: [],
    bricksLeft: 0
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CREATE_BRICK_GRID:
            return {
                ...state,
                brickGrid: action.payload
            }
        case types.UPDATE_BRICK_GRID:
            return {
                ...state,
                brickGrid: action.payload
            }
        case types.UPDATE_BRICKS_LEFT:
            return {
                ...state,
                bricksLeft: action.payload
            }
        default:
            return state;
    }
}