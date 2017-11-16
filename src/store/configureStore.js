import { createStore } from 'redux'
import reducer from './../reducers'

const configureStore = ()=> {
    let store = createStore(reducer);
    console.log('store', store)
    return store;
}

export default configureStore;