import { createStore, applyMiddleware, combineReducers } from "redux";
import { userReducer, errorReducer } from "./reducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
    userReducer,
    errorReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
