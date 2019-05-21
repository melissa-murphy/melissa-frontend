// TODO:
//   ADD_PATIENT
//   REMOVE_PATIENT (stretch)
//   UPDATE_PATIENT (stretch)

import {
  FETCHING_PATIENT,
  FETCH_PATIENT_SUCCESS,
  FETCH_PATIENT_FAILURE
} from '../actions';

const initialState = {
  patient: [],
  loading: false,
  error: ''
};

function patientProfileReducer(state = initialState, action) {
  console.log(`----------------fetch PATIENT/staff profile fired`);
  switch (action.type) {
    case FETCHING_PATIENT:
      return {
        ...state,
        loading: true
      };
    case FETCH_PATIENT_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case FETCH_PATIENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default patientProfileReducer;
