import * as actionTypes from '../action/actionTypes/index';

const initialState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case actionTypes.CREATE_USER_FAILURE:
      return { ...state, user: null, error: action.payload };
    case actionTypes.LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case actionTypes.LOGIN_USER_FAILURE:
      return { ...state, user: null, error: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
