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
  console.log(`----------------fetch user/staff profile fired`);
  switch (action.type) {
    // TODO:
    //   ADD_PATIENT
    //   REMOVE_PATIENT (stretch)
    //   UPDATE_PATIENT (stretch)

    // console.log(`----------------fetch PATIENT/staff profile fired`);

    case FETCH_PATIENT_START:
      return {
        ...state,
        patient: action.payload.user,
        error: '',
        isLoggedIn: true
      };
    case FETCH_PATIENT_SUCCESS:
      return {
        ...state,
        error: '',
        isLoggedIn: true
      };
    case LOGIN_START:
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
    case LOGIN_FAILED:
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

export default reducer;
