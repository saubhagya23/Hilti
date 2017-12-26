import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar} from 'react-native';
import Navigate from './src/navigation';
import store from './src/store/configureStore'

export default class App extends Component {
    
    render() {
        console.log('StatusBar.currentHeight', StatusBar.currentHeight)
        return (
            
                <Provider store={store}>
                    <Navigate />
                </Provider>
            
        );
    }
}

