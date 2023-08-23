import * as actionTypes from '../actionTypes/index';

export const createUserSuccess = (user) => ({
    type: actionTypes.CREATE_USER_SUCCESS,
    payload: user,
  });
  
  export const createUserFailure = (error) => ({
    type: actionTypes.CREATE_USER_FAILURE,
    payload: error,
  });
  
  export const loginUserSuccess = (user) => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: user,
  });
  
  export const loginUserFailure = (error) => ({
    type: actionTypes.LOGIN_USER_FAILURE,
    payload: error,
  });
  
  export const logout = () => ({
    type: actionTypes.LOGOUT,
  });