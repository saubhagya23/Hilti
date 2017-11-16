import { createStore, applyMiddleware } from 'redux';
import reducer from './../reducers';
import thunkMiddleware from 'redux-thunk';

const configureStore = ()=> {
    let store = createStore(reducer,applyMiddleware(thunkMiddleware));
    return store;
}

const store = configureStore();

export default store;