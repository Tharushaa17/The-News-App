import axios from 'axios';
import { createUserFailure, createUserSuccess } from "../redux/action/actionCreators";

const urlRegister = `${process.env.BASE_URL}/singup`;

export const createUser = (newUser) => async (dispatch) => {
    try {
      const response = await axios.post(urlRegister, newUser);
      dispatch(createUserSuccess(response.data));
    } catch (error) {
      dispatch(createUserFailure(error.message));
    }
  };