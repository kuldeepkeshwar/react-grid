import { combineReducers } from 'redux';
import userReducer from './user';
import employeeReducer from './employee';

export default combineReducers({
  user: userReducer,
  ...employeeReducer
});
