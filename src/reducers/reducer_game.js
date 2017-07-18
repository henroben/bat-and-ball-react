import * as types from '../actions/types';

const INITIAL_STATE = {
    score: 0,
    lives: 2,
    level: 1,
    gameState: 'intro',
    highScore: {
        table: [
            { name: 'BRM', score: 50000 },
            { name: 'Charlotte', score: 20000 },
            { name: 'Nuno', score: 15000 },
            { name: 'Ed', score: 10000 },
            { name: 'Mark', score: 8000 },
            { name: 'April', score: 5000 },
            { name: 'Poppy', score: 3000 },
            { name: 'Gus', score: 1000 },
            { name: 'Olly', score: 500 },
            { name: 'Luke', score: 100 },
        ],
        isHighScore: false
    }
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
                highScore: {
                    table: action.payload,
                    isHighScore: true
                }
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