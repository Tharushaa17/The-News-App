import * as api from '../api/userAPI';

// actions.js
import axios from 'axios';

const urlRegister = 'http://localhost:5000/api/v1/today/singup';

// Action types
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

// Action creators
export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

// Async action using redux-thunk
export const createUser = (newUser) => async (dispatch) => {
  try {
    const response = await axios.post(urlRegister, newUser);
    dispatch(createUserSuccess(response.data));
  } catch (error) {
    dispatch(createUserFailure(error.message));
  }
};



export const logginUser = (user) => async (dispatch) => {
    try {
      const {data} = await api.logginUser(user)
      dispatch({ type: 'CREATE', payload: data }).
      console.log(user);
      console.log('done!');
    } catch (error) {
      console.log(error.message);
      console.log('not work');
    }
  }