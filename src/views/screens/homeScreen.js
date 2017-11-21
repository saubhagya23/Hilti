import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PageHeader from '../common/pageHeader'
import VideoComp from './homeContent'

class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
               <PageHeader/>
                <VideoComp/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    }
});

export default HomeScreen;