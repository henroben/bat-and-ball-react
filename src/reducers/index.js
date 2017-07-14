import { combineReducers } from 'redux';
import BallReducer from './reducer_ball';
import PaddleReducer from './reducer_paddle';

const rootReducer = combineReducers({
  ball: BallReducer,
  paddle: PaddleReducer
});

export default rootReducer;
