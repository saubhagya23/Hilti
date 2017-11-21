import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Expo from 'expo'

class HomeContent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Expo.Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    posterSource={require('../../assets/images/brandLogo.png')}
                    rate={1.0}
                    volume={1.0}
                    muted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: 300, height: 300 }}
                />
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

export default HomeContent;