// export default (user = [], action) =>{
//     switch (action.type) {
//         case 'FETCH_ALL':
//             return action.payload;
//         case 'CREATE':
//             return [ ...user, action.payload ];
//         default:
//             return user;
//     }
// }

// reducers.js
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../action/user';

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
    // Add other cases for different actions if needed
    default:
      return state;
  }
};

export default userReducer;
