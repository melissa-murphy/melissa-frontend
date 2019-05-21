import {
    FETCHING_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from '../actions';

const initialState = {
    user: [],
    loading: false,
    error: ''
}


function
case FETCHING_FRIENDS:
    return {
      ...state,
      loading: true
    };
  case FETCH_FRIENDS_SUCCESS:
    return {
      ...state,
      friends: action.payload,
      loading: false
    };
  case FETCH_FRIENDS_FAILURE:
    return {
      ...state,
      error: action.payload,
      loading: false
    };