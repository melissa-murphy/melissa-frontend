// TODO:
//   ADD_CLINICIAN
//   REMOVE_CLINICIAN (stretch)
//   UPDATE_CLINICIAN (stretch)

import {
    FETCHING_CLINICIAN,
    FETCH_CLINICIAN_SUCCESS,
    FETCH_CLINICIAN_FAILURE
  } from '../actions';
  
  const initialState = {
    clinician: [],
    loading: false,
    error: ''
  };
  
  function clinicianProfileReducer(state = initialState, action) {
    console.log(`----------------fetch patient/clinician profile fired`);
    switch (action.type) {
      case FETCHING_CLINICIAN:
        return {
          ...state,
          loading: true
        };
      case FETCH_CLINICIAN_SUCCESS:
        return {
          ...state,
          friends: action.payload,
          loading: false
        };
      case FETCH_CLINICIAN_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export default clinicianProfileReducer;