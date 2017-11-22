import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvent } from '../actions/apiData';
import HomeScreen from './screens/homeScreen';
import Login from './screens/login'

class Home extends Component {

    componentWillMount(){
        const { getEvent } = this.props;
            let APICALL = getEvent().then(eventList => console.log('eventList sucess', eventList));

    }



    render() {
        return (
            <View style={styles.container}>
                {/*<HomeScreen/>*/}
                <Login/>
                {/*<Text style={styles.text}>Redux Examples</Text>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Load Data</Text>
                </TouchableHighlight>*/}
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
      eventList: state.event.eventList
    }
}

function mapDispatchToProps(dispatch){
  return {
    dispatch,
    ...bindActionCreators({
        getEvent,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
