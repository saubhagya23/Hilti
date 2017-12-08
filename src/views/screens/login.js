import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Constants, Font } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import { postEvent ,setUserDetail, postUserNotificationToken} from '../../actions/apiData';
import { asyncPost } from '../../utils/asyncStore';
import Icon  from 'react-native-vector-icons/FontAwesome';
import {Permissions, Notifications} from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// You can import from local files
/*import AssetExample from './components/AssetExample';
import Header from './components/Header';*/

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // 0.17.0

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: 'xyz.abc@hilti.com',
            empCode: 'employee code',
            fontLoaded:false,
            err:false,
            errText:''
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
        if (this.state.empId === 'xyz.abc@hilti.com' || this.state.empCode === 'employee code' || this.state.empId === '' || this.state.empCode === '') {
            this.setState(
                {
                    err: true,
                    errText: 'Fields cannot be empty'
                })
        }
        else {
            let empLoginInfo = {
                email: this.state.empId,
                password: this.state.empCode
            };
            const {postEvent} = this.props;
            postEvent({payload: empLoginInfo}).then(eventLoginList => {
                if (eventLoginList.token) {
                    asyncPost('token', eventLoginList.token);
                    asyncPost('userDetail', JSON.stringify(eventLoginList.userDetail));

                    const {setUserDetail} = this.props;
                    this.props.setUserDetail(JSON.stringify(eventLoginList.userDetail));

                    const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName: 'HomeScreen'})
                        ]
                    });
                    this.props.navigation.dispatch(resetAction);
                } else {
                    this.setState(
                        {
                            err: true,
                            errText: 'Invalid emailId or password'
                        })
                }
                return eventLoginList.userDetail


            }).then((detail) => {
                userCode = detail.Code;
                notificationRegisterResponse = this.registerForPushNotificationsAsync(userCode)
                    .then((data) => {
                        console.log(data.token, 'response from login')
                        asyncPost('notifToken', data.token);
                    });
            });
        }
    }

    async registerForPushNotificationsAsync(userCode) {
        const {existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            return;
        } console.log(finalStatus,'permission');
        let token = await Notifications.getExpoPushTokenAsync();
        let options = {
            payload: { token: token },
            params: userCode
        }
        const { postUserNotificationToken } = this.props;
        return postUserNotificationToken(options)
    }

    render() {
        return (
            <KeyboardAwareScrollView
                style={styles.container}
                // behavior="padding"
            >
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <View style={styles.container1}>
                            <View style={{height:215.5}}>
                            <Image
                                style={{position:'relative', width:null, height:null, flex:1}}
                                resizeMode={'cover'}
                                source={require('../../assets/images/loginMainImg/loginMainImg_hdpi.png')}
                            />
                            </View>

                            <Image
                                style={{position:'absolute',marginTop:38.5,marginLeft:18.5}}
                                source={require('../../assets/images/logo/logo_hdpi.png')}
                            />

                            <Text style={{position:'absolute', marginTop:86.5, marginLeft:18.5, color:'#dd2127', fontFamily:'hilti-roman'}}>MO INDIA EVENTS</Text>
                            <View style={{marginLeft:30, marginRight:30}}>
                                {
                                    this.state.err ?
                                        <Text style={{color:'#dd2127',alignSelf:'center'}}>{this.state.errText}</Text>:null
                                }
                                <View style={{marginTop:45.5,height:15.5, flexDirection:'row'}}>
                                    <Icon
                                        name='envelope'
                                        size={15}
                                        onPress={() => {}} />

                                    <Text style={{marginLeft:10.5, height:15, color:'#000000', fontFamily:'hilti-bold', fontSize:12}}>Email ID</Text>
                                </View>

                                <TextInput
                                    autoCapitalize={'none'}
                                    style={{height: 43,
                                        borderWidth: 1,
                                        color:'#000000',
                                        opacity:0.6,
                                        borderColor:'#dddddd',
                                        backgroundColor:'#f5f3ee',
                                        paddingLeft:15.5,
                                        paddingTop:0,
                                        marginTop:15,
                                        fontFamily:'hilti-roman',
                                        fontSize:12
                                    }}
                                    onChangeText={(empId) => this.setState({empId:empId.toLowerCase(),err:false})}
                                    value={this.state.empId}
                                    onFocus={() => {this.setState({empId:'',err:false})}}
                                    underlineColorAndroid='transparent'
                                />

                                <View style={{marginTop:28,height:15.5, flexDirection:'row'}}>
                                    <Icon
                                        name='user'
                                        size={20}
                                        onPress={() => {}} />

                                    <Text style={{marginLeft:13.5, height:15,color:'#000000',fontFamily:'hilti-bold',fontSize:12, letterSpacing:0.6}}>Password</Text>
                                </View>


                                <TextInput
                                    autoCapitalize={'none'}
                                    style={{height: 43,
                                        borderWidth: 1,
                                        color:'#000000',
                                        opacity:0.6,
                                        borderColor:'#dddddd',
                                        backgroundColor:'#f5f3ee',
                                        paddingLeft:15.5,
                                        paddingTop:0,
                                        marginTop:15,
                                        fontFamily:'hilti-roman',
                                        fontSize:12
                                    }}
                                    secureTextEntry={true}
                                    onChangeText={(empCode) => this.setState({empCode:empCode})}
                                    value={this.state.empCode}
                                    onFocus={() => {this.setState({empCode:'',err:false})}}
                                    underlineColorAndroid='transparent'
                                />
                                <TouchableHighlight style={styles.button} onPress= { () => {this.login()}}>
                                    <View>
                                        <Text style={{color:'#dd2127',fontSize:16, fontFamily:'hilti-roman', marginTop:8.5, textAlign:'center' }}>SIGN IN</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>:null
                }
            </KeyboardAwareScrollView>
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
        height:41,
        backgroundColor:'white',
        borderColor:'#dd2127',
        borderWidth:1,
        marginTop:36,
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
                setUserDetail,
                postUserNotificationToken
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)