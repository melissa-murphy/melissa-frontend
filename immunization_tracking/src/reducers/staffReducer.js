// TODO:
//   ADD_STAFF
//   REMOVE_STAFF (stretch)
//   UPDATE_STAFF (stretch)

import {
  FETCHING_STAFF,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE
} from '../actions';

const initialState = {
  staff: [],
  loading: false,
  error: ''
};

function staffProfileReducer(state = initialState, action) {
  console.log(`----------------fetch patient/staff profile fired`);
  switch (action.type) {
    case FETCHING_STAFF:
      return {
        ...state,
        loading: true
      };
    case FETCH_STAFF_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case FETCH_STAFF_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default staffProfileReducer;
