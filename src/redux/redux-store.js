import {applyMiddleware, combineReducers, createStore} from "redux";
import jobsReducer from "./jobs-reducers";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducers";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    jobs: jobsReducer,
    profile: profileReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;