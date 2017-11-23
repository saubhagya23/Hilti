import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvent } from '../actions/apiData';

import Login from './screens/login'
import HomeScreen from './screens/homeScreen'
import { asyncGet } from '../utils/asyncStore'

class Home extends Component {
    constructor(){
        super();

        this.state = {

            token:'',
            loader:true,
        }
    }

    componentWillMount(){
        // console.log('props....####',this.props.eventLoginList);
        asyncGet('token').then((value) => {
            console.log('####',value);
            this.setState({token: value, loader:false })})
        const { getEvent } = this.props;
        //let APICALL = getEvent().then(eventList => console.log('eventList sucess', eventList));

    }


    render() {
        //console.log('props....',this.props, this.props.eventLoginList);
        const { loader, token} = this.state;
        console.log('states-----',this.state);
        return (
            <View style={{flex:1}}>
                {loader?
                    <View>
                        <ActivityIndicator color='red' size='large'/>
                    </View>:
                    <View style={styles.container}>
                        {token?
                            <HomeScreen/>:
                            <Login props={this.props}/>
                        }
                        {/*<HomeScreen/>*/}

                        {/*<Text style={styles.text}>Redux Examples</Text>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText}>Load Data</Text>
                    </TouchableHighlight>*/}
                    </View>


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
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
