import { combineReducers } from 'redux';
import BallReducer from './reducer_ball';
import PaddleReducer from './reducer_paddle';
import BricksReducer from './reducer_bricks';
import GameReducer from './reducer_game';

const rootReducer = combineReducers({
  ball: BallReducer,
  paddle: PaddleReducer,
  bricks: BricksReducer,
  game: GameReducer
});

export default rootReducer;
