import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigate from './src/navigation';
import store from './src/store/configureStore'


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigate />
            </Provider>
        );
    }
}

