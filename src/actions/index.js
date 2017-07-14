import * as types from './types';

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