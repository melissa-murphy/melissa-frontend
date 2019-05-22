// import * as actionTypes from '../actions';
 
// TODO:
//   ADD_USER
//   REMOVE_USER (stretch)
//   UPDATE_USER (stretch)

import {
  // FETCH_USER_START,
  // FETCH_USER_SUCCESS,
  // FETCH_USER_FAILED,
  FETCH_PATIENT_START,
  FETCH_PATIENT_SUCCESS,
  FETCH_PATIENT_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED
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

function reducer(state = initialState, action) {
  console.log(`----------------fetch user/staff profile fired`);
  switch (action.type) {
    // case FETCH_USER_START:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // case FETCH_USER_SUCCESS:
    //   return {
    //     ...state,
    //     friends: action.payload,
    //     loading: false
    //   };
    // case FETCH_USER_FAILED:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false
    //   };

    // TODO:
    //   ADD_PATIENT
    //   REMOVE_PATIENT (stretch)
    //   UPDATE_PATIENT (stretch)

    // console.log(`----------------fetch PATIENT/staff profile fired`);

    case FETCH_PATIENT_START:
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
    case FETCH_PATIENT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    // console.log(`----------------login fired`);

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