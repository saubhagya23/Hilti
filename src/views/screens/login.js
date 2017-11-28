import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Constants, Font } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import { postEvent } from '../../actions/apiData';
import { asyncPost } from '../../utils/asyncStore';

// You can import from local files
/*import AssetExample from './components/AssetExample';
import Header from './components/Header';*/

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // 0.17.0

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: 'abc@hilti.com',
            empCode: 'Hilti2018',
            fontLoaded:false
        };
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

    login = () => {
        let empLoginInfo = {
            email: this.state.empId,
            password: this.state.empCode
        }
        const { postEvent } = this.props;
        postEvent({payload:empLoginInfo}).then(eventLoginList => {
            if(eventLoginList.token){
                asyncPost('token', eventLoginList.token);
                console.log('this', this.props)
                //this.props.props.navigation.navigate('HomeScreen',{userToken:eventLoginList.token});
              const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'HomeScreen' })
                ]
              })
              this.props.props.navigation.dispatch(resetAction);

        }});
    }

    render() {
        console.log('props in login---',this.props);
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <View style={styles.container1}>

                            <Image
                                style={{height:179.5, width:360, marginTop:20, position:'relative'}}
                                source={require('../../assets/images/loginMainImg/loginMainImg_mdpi.png')}
                            />

                            <Image
                                style={{position:'absolute',width:219,height:179.5, marginTop:20}}
                                source={require('../../assets/images/shape_imh/shape_imh.png')}
                            />

                            <Image
                                style={{position:'absolute',marginTop:38.5,marginLeft:18.5}}
                                source={require('../../assets/images/logo/logo_hdpi.png')}
                            />

                            <Text style={{position:'absolute', marginTop:86.5, marginLeft:18.5, color:'#dd2127', fontFamily:'hilti-roman'}}>MO INDIA EVENTS</Text>

                            <View style={{marginTop:45.5,height:15.5, flexDirection:'row'}}>
                                <Image
                                    style={{marginLeft:32.5,width:14, height:9.5, marginTop:4}}
                                    source={require('../../assets/images/email_icon/email_icon_mdpi.png')}
                                />

                                <Text style={{marginLeft:10.5, width:50.5, height:15, color:'#000000', fontFamily:'hilti-bold', fontSize:12}}>Email ID</Text>
                            </View>

                            <TextInput
                                autoCapitalize={'none'}
                                style={{height: 43,
                                    borderWidth: 1,
                                    color:'#b0b0ab',
                                    borderColor:'#dddddd',
                                    backgroundColor:'#f5f3ee',
                                    width: 294,
                                    paddingLeft:15.5,
                                    paddingTop:0,
                                    marginLeft:32.5,
                                    marginTop:15,
                                    fontFamily:'hilti-roman',
                                    fontSize:12
                                }}
                                onChangeText={(empId) => this.setState({empId})}
                                value={this.state.empId}
                                onFocus={() => {this.setState({empId:''})}}
                                underlineColorAndroid='transparent'
                            />

                            <View style={{marginTop:28,height:15.5, flexDirection:'row'}}>
                                <Image
                                    style={{marginLeft:32.5,width:11, height:15.5}}
                                    source={require('../../assets/images/emp_icon/emp_icon_mdpi.png')}
                                />

                                <Text style={{marginLeft:13.5,width:96.5,height:15,color:'#000000',fontFamily:'hilti-bold',fontSize:12, letterSpacing:0.6}}>Employee Code</Text>
                            </View>


                            <TextInput
                                autoCapitalize={'none'}
                                style={{height: 43,
                                    borderWidth: 1,
                                    color:'#b0b0ab',
                                    borderColor:'#dddddd',
                                    backgroundColor:'#f5f3ee',
                                    width: 294,
                                    paddingLeft:15.5,
                                    paddingTop:0,
                                    marginLeft:32.5,
                                    marginTop:15,
                                    fontFamily:'hilti-roman',
                                    fontSize:12
                                }}
                                onChangeText={(empCode) => this.setState({empCode})}
                                value={this.state.empCode}
                                onFocus={() => {this.setState({empCode:''})}}
                                underlineColorAndroid='transparent'
                            />
                            <TouchableHighlight style={styles.button} onPress= { () => {this.login()}}>
                                <View>
                                    <Text style={{color:'#dd2127',fontSize:16, fontFamily:'hilti-roman', marginLeft:116.5, marginTop:8.5, width:62, height:17 }}>SIGN IN</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>:null
                }
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,*/
        backgroundColor: 'white',
    },
    container1: {
        flex: 1,
        /*alignItems: 'center',*/
        /*justifyContent: 'center',*/
        /*paddingTop: Constants.statusBarHeight,*/
        backgroundColor: 'white',
    },
    title: {
        margin: 20
    },
    signin: {
        fontSize:28,
        marginTop:40,
        color:'black'
    },
    textInput:{
        height: 43,
        borderWidth: 1,
        color:'#f5f3ee',
        borderColor:'#dddddd',
        width: 294,
        paddingLeft:15.5,
        paddingTop:16,
        marginLeft:32.5,
        marginTop:15
    },
    button:{
        width: 293,
        height:41,
        backgroundColor:'white',
        borderColor:'#dd2127',
        borderWidth:1,
        marginTop:36,
        marginLeft:33
    }
    /*paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },*/
});

function mapStateToProps (state) {
    return {
        eventLoginList: state.event.eventLoginList
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                postEvent,
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)