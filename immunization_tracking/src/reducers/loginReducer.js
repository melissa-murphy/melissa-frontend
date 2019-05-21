import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  user: [],
  loggingIn: false,
  loading: false,
  error: ''
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default loginReducer;
