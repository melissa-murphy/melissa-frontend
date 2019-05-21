import {
  FETCHING_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions';

const initialState = {
  user: [],
  loading: false,
  error: ''
};

function userProfileReducer(state = initialState, action) {
  console.log(`----------------fetch user/clinician profile fired`);
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
    default:
      return state;
  }
}

export default userProfileReducer;