import {legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from '../reducers/users';

const store = createStore(
    combineReducers({ userReducer }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

