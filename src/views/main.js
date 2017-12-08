import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import { getEvent,setUserDetail, readAllNotification } from '../actions/apiData';

import Login from './screens/login'
import HomeScreen from './screens/homeScreen'
import { asyncGet, asyncRemove } from '../utils/asyncStore'
import {Notifications} from 'expo';

class Home extends Component {
    constructor(){
        super();

        /*this.state = {

            token:'',
            loader:true,
        }*/
    }

    componentWillMount(){
        //asyncRemove('token');
        asyncGet('token').then((value) => {
            if(value !== null){
                asyncGet('userDetail').then((detail) => {
                    const { setUserDetail } = this.props;
                    this.props.setUserDetail(detail);
                });
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'HomeScreen' })
                    ]
                });
                this.props.navigation.dispatch(resetAction);
                Notifications.addListener(this._handleListner);
            }
            else{
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login' })
                    ]
                })
                this.props.navigation.dispatch(resetAction);
            }
        })

    }

    _handleListner= (notification) => {
        this.props.readAllNotification().then((resp)=>{
            this.props.navigation.navigate('Notifications',{})
        })
    }


    render() {
        return (
            <View style={{flex:1}}>
                <View style={{alignItems:'center',justifyContent:'center',flex:1,marginTop:70}}>
                    <ActivityIndicator color='red' size='large' style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 80}}/>
                </View>
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

function mapStateToProps (state) {
    return {
      eventList: state.event.eventList,
        eventLoginList:state.event.eventLoginList
    }
}

function mapDispatchToProps(dispatch){
  return {
    dispatch,
    ...bindActionCreators({
            getEvent,
            setUserDetail,
            readAllNotification
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
