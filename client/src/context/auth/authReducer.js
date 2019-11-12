import {
  AUTH_ERROR,
  USER_LOADED,
  CLEAR_ERRORS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';

export default (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };

    // ERRORS
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        ...action.payload,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };

    // REGISTER/LOGIN
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };

    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
