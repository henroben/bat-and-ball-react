import * as types from '../actions/types';

const INITIAL_STATE = {
    score: 0,
    lives: 2,
    level: 1,
    gameState: 'intro',
    highScore: 0
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.UPDATE_SCORE:
            return {
                ...state,
                score: action.payload
            }
        case types.UPDATE_HIGH_SCORE:
            return {
                ...state,
                highScore: action.payload
            }
        case types.UPDATE_LIVES:
            return {
                ...state,
                lives: action.payload
            }
        case types.UPDATE_LEVEL:
            return {
                ...state,
                level: action.payload
            }
        case types.UPDATE_GAME_STATE:
            return {
                ...state,
                gameState: action.payload
            }
        default:
            return state;
    }
}