import { createStore, applyMiddleware } from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import reducer from './../reducers';


const configureStore = ()=> {
    let store = createStore(reducer,applyMiddleware(thunkMiddleware, createLogger({collapsed:true})));
    return store;
}

const store = configureStore();

export default store;