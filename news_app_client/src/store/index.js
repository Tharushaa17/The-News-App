// store.js
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/users';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
