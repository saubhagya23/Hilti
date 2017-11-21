import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PageHeader from '../common/pageHeader'
import VideoComp from './homeContent'

class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:0.1}}>
                    <PageHeader/>
                </View>
                <View style={{flex:0.3}}>
                    <VideoComp/>
                </View>
                <View style={{flex:0.6}}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1
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