import axios from 'axios';

const urlRegister = 'http://localhost:5000/api/v1/today/singup';
const urlLoggin = 'http://localhost:5000/api/v1/today/login';

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const createUser = (newUser) => async (dispatch) => {
  try {
    const response = await axios.post(urlRegister, newUser);
    dispatch(createUserSuccess(response.data));
    // window.location.href = '/Register';
  } catch (error) {
    dispatch(createUserFailure(error.message));
  }
};

export const logginUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(urlLoggin , user)
    dispatch(loginUserSuccess(response.data));
    // window.location.href = '/Loggin';
  } catch (error) {
    console.log(error.message);
  }
}