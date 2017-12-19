import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Font } from 'expo'
import PageHeaderNotif from '../common/pageHeaderNotif'

class EmergencyContactNo extends Component {
    constructor(){
        super();

        this.state = {
            fontLoaded:false
        }
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
        let imgSrc;
        imgSrc = require('../../assets/images/expCornerMainImg/exp_corner_mdpi.png');

        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage='EMERGENCY CONTACT NO.' navigation={this.props.navigation}/>

                        <ImageBackground
                            style={{height:183}}
                            source={imgSrc}
                        >
                            <Text style={{position:'absolute',marginTop:40,marginLeft:20,width:240.5,fontSize:14,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                Emergency contacts will be available after 1 Jan, therefore, please write in to Annual kick off Email ID
                            </Text>
                        </ImageBackground>
                    </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
});

export default EmergencyContactNo