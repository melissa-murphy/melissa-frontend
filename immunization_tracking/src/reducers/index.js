import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import staffReducer from './staffReducer';
import userProfileReducer from './userProfileReducer';
import patientReducer from './patientReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  userProfileReducer: userProfileReducer,
  staffReducer: staffReducer,
  patientReducer: patientReducer
});

export default rootReducer;
