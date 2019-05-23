// import * as actionTypes from '../actions';

// TODO:
//   ADD_USER
//   REMOVE_USER (stretch)
//   UPDATE_USER (stretch)

import {
  FETCH_PATIENT_START,
  FETCH_PATIENT_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions';

const initialState = {
  patients: {},
  loggingIn: false,
  loggedIn: false,
  loading: false,
  error: ''
};

function reducer(state = initialState, action) {
  console.log(`----------------reducer fired`);
  switch (action.type) {
    // TODO:
    //   ADD_PATIENT
    //   REMOVE_PATIENT (stretch)
    //   UPDATE_PATIENT (stretch)

    // console.log(`----------------fetch PATIENT/staff profile fired`);

    case FETCH_PATIENT_START:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: true,
        error: ''
      };
    case FETCH_PATIENT_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        patients: action.payload,
        error: ''
      };
    case LOGIN_START:
      return {
        ...state,
        isLoggedIn: false,
        error: '',
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
        isLoading: false
      };
    default:
      return state;
  }
}

export default reducer;
