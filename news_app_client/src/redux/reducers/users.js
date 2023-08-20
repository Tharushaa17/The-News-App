import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE,LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../action/user';

const initialState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case CREATE_USER_FAILURE:
      return { ...state, user: null, error: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case LOGIN_USER_FAILURE:
      return { ...state, user: null, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
