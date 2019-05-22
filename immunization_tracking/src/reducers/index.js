// TODO:
//   ADD_USER
//   REMOVE_USER (stretch)
//   UPDATE_USER (stretch)

import {
  FETCHING_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCHING_PATIENT,
  FETCH_PATIENT_SUCCESS,
  FETCH_PATIENT_FAILURE,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

export const URL = 'https://immunization-tracker-backend.herokuapp.com';

const initialState = {
  patient: [],
  user: [],
  loggingIn: false,
  loggedIn: false,
  loading: false,
  error: ''
};

function patientReducer(state = initialState, action) {
  console.log(`----------------fetch user/staff profile fired`);
  switch (action.type) {
    case FETCHING_USER:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    // TODO:
    //   ADD_PATIENT
    //   REMOVE_PATIENT (stretch)
    //   UPDATE_PATIENT (stretch)

    // console.log(`----------------fetch PATIENT/staff profile fired`);

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

    // console.log(`----------------login fired`);

    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        isLoggedIn: false,
        error: '',
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        isLoggedIn: false,
        loading: false
      };
    default:
      return state;
  }
}

export default patientReducer;
