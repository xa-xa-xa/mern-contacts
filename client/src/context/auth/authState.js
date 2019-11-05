import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loaded: true,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  // Load User

  // Register User

  // Login User

  // Logout

  // CLear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loaded: state.loaded,
        error: state.error,
        user: state.user,
        loadUser,
        registerUser,
        loginUser,
        logout,
        cLearErrors
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
