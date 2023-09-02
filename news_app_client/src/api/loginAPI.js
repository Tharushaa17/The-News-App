import axios from 'axios';
import { loginUserFailure, loginUserSuccess } from '../redux/action/actionCreators';

const urlLoggin = `${process.env.REACT_APP_BASE_URL}/login`;

export const logginUser = (user) => async (dispatch) => {
    try {
      const response = await axios.post(urlLoggin , user)
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure(error.message));
    }
  }