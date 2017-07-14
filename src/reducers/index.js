import { combineReducers } from 'redux';
import BallReducer from './reducer_ball';
import PaddleReducer from './reducer_paddle';
import BricksReducer from './reducer_bricks';

const rootReducer = combineReducers({
  ball: BallReducer,
  paddle: PaddleReducer,
  bricks: BricksReducer
});

export default rootReducer;
