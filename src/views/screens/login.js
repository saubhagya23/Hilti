import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postEvent } from '../../actions/apiData';

// You can import from local files
/*import AssetExample from './components/AssetExample';
import Header from './components/Header';*/

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // 0.17.0

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: 'Email ID',
            empCode: 'Employee Code'
        };
    }

    login = () => {
        let empLoginInfo = {
            email: this.state.empId,
            password: this.state.empCode
        }
        const { postEvent } = this.props;
        let APILOGINCALL = postEvent({payload:empLoginInfo}).then(eventLoginList => {if(eventLoginList.token){
            this.props.props.navigation.navigate('HomeScreen',{});
        }});
    }

    render() {
        console.log('props in login---',this.props);
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
            <View style={{flex:1}}>
                <View style={styles.container1}>
                    <Image
                        style={{marginTop:40}}
                        source={require('../../assets/images/xhdpi.png')}
                    />

                    <Text style={styles.signin}>Sign In</Text>
                    <View style={{backgroundColor:'#f5f5ee', width:280, height:50, marginTop:20}}>
                        {/*<Text style={{fontSize:15, paddingTop:20 , color:"white"}}>EMAIL ID</Text>*/}
                        <TextInput
                            autoCapitalize={'none'}
                            style={styles.textInput}
                            onChangeText={(empId) => this.setState({empId})}
                            value={this.state.empId}
                            onFocus={() => {this.setState({empId:''})}}
                        />
                    </View>
                    <View style={{backgroundColor:'#f5f5ee', width:280, height:50, marginTop:25}}>
                        {/*<Text style={{fontSize:15, paddingTop:20 , color:"white"}}>PASSWORD</Text>*/}
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(empCode) => this.setState({empCode})}
                            value={this.state.empCode}
                            onFocus={() => {this.setState({empCode:''})}}
                        />
                    </View>
                    <TouchableHighlight style={styles.button} onPress= { () => {this.login()}}>
                        <View>
                            <Text style={{color:'red',fontSize:15, fontWeight:'bold',  padding:10}}>SIGN IN</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        /*justifyContent: 'center',*/
        paddingTop: Constants.statusBarHeight,
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
        flex:1,
        height: 50,
        borderWidth: 1
        ,color:'black',
        borderColor:'#efeeec',
        width: 280,
        padding:15
    },
    button:{
        width: 280,
        height:50,
        alignItems:'center',
        paddingTop:5,
        backgroundColor:'white',
        borderColor:'red',
        borderWidth:1,
        marginTop:50
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