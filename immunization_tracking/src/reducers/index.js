import { combineReducers } from 'redux';
import childReducer from './childReducer';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  child: childReducer,
  login: loginReducer,
  profile: profileReducer
});

export default rootReducer;
