import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Expo, { Font } from 'expo'

class HomeContent extends Component {

    state = {
        fontLoaded:false
    }

    async componentWillMount(){
        await Font.loadAsync({
            'hilti-bold': require('../../assets/fonts/Hilti-Bold.ttf'),
            'hilti-roman': require('../../assets/fonts/Hilti-Roman.ttf'),
        });
        this.setState({
            fontLoaded:true
        })
    }

    render(){
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <Image
                            style={{flex:1, width: null, height: null}}
                            resizeMode={'cover'}
                            source={require('../../assets/images/homeVideoImg/homeVideoImgmdpi.png')}
                        />
                        <Image
                            style={{position:'absolute',width:229,height:179.5}}
                            source={require('../../assets/images/shape_imh/shape_imh.png')}
                        />
                        <Image
                            style={{position:'absolute',marginTop:22.5,marginLeft:19}}
                            source={require('../../assets/images/logo/logo_mdpi.png')}
                        />
                        <Text style={{position:'absolute',width:141.5, height:31.5, marginTop:57.5,marginLeft:19,color:'#dd2127',fontSize:14,fontFamily:'hilti-roman'}}>
                            WELCOME MESSAGE BY GM
                        </Text>
                        <Text style={{position:'absolute',width:131.5, height:24, marginTop:95,marginLeft:18.5,color:'#7c294e',fontSize:10,letterSpacing:0.05,fontFamily:'hilti-bold'}}>
                            We welcome you to be a part of our annual meet.
                        </Text>
                        <Text style={{position:'absolute',width:48.5, height:9, marginTop:126.5,marginLeft:19,color:'#000000',fontSize:8, fontFamily:'hilti-bold'}}>
                            Watch Video
                        </Text>
                        <Image
                            style={{position:'absolute',marginTop:128.5,marginLeft:72,width:10,height:10}}
                            source={require('../../assets/images/playIcon/play_icon.png')}
                        />
                    </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex:1
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