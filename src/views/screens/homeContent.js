import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Font } from 'expo'
import Icon  from 'react-native-vector-icons/FontAwesome'

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
                            source={require('../../assets/images/homeVideoImg/homeVideoImg_hdpi.png')}
                        />
                        {/*<Image
                            style={{position:'absolute',marginTop:22.5,marginLeft:19}}
                            source={require('../../assets/images/logo/logo_mdpi.png')}
                        />*/}
                        <Text style={{position:'absolute',width:141.5, marginTop:32,marginLeft:19,color:'#dd2127',fontSize:14,fontFamily:'hilti-roman'}}>
                            WELCOME MESSAGE BY GM
                        </Text>
                        <Text style={{position:'absolute',width:141.5, marginTop:75,marginLeft:18.5,color:'#7c294e',fontSize:10,letterSpacing:0.05,fontFamily:'hilti-bold'}}>
                            We welcome you to be a part of our annual meet.
                        </Text>
                        <Text style={{position:'absolute', marginTop:111.5,marginLeft:19,color:'#000000',fontSize:9, fontFamily:'hilti-bold'}}>
                            Watch Video
                        </Text>
                        {/*<Image
                            style={{position:'absolute',marginTop:128.5,marginLeft:72,width:10,height:10}}
                            source={require('../../assets/images/playIcon/play_icon.png')}
                        />*/}

                        <View style={{position:'absolute',marginTop:113.5,marginLeft:75}}>
                            <Icon
                                style={{color:'#dd2127'}}
                                name='play-circle-o'
                                size={10}
                                onPress={() => {/*start video*/}} />
                        </View>
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