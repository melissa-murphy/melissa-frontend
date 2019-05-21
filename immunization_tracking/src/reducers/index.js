import { combineReducers } from 'redux';
import childReducer from './childReducer';
import loginReducer from './loginReducer';
import patientProfileReducer from './patientProfileReducer';
import clinicianProfileReducer from './clinicianProfileReducer';

const rootReducer = combineReducers({
  child: childReducer,
  login: loginReducer,
  patientProfile: patientProfileReducer,
  clinicianProfile: clinicianProfileReducer
});

export default rootReducer;
