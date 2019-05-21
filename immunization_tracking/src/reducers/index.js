import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import clinicianReducer from './clinicianReducer';
import userProfileReducer from './userProfileReducer';
import patientReducer from './patientReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  userProfileReducer: userProfileReducer,
  clinicianReducer: clinicianReducer,
  patientReducer: patientReducer
});

export default rootReducer;
