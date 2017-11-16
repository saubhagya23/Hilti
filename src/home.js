import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import { fetchData } from './actions/view.asyncAction'

class Home extends React.Component {
    constructor(){
        super();
    }

    onPressButton = () => {
        this.props.fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Redux Examples</Text>
                <TouchableHighlight style={styles.button} onPress={this.onPressButton}>
                    <Text style={styles.buttonText}>Load Data</Text>
                </TouchableHighlight>
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

function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

/*import React, {Component} from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './src/actions/view.asyncAction'

class App extends Component{
    onPressButton = () => {
        this.props.fetchData();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Redux Examples</Text>
                <TouchableHighlight style={styles.button} onPress={this.onPressButton}>
                    <Text style={styles.buttonText}>Load Data</Text>
                </TouchableHighlight>
            </View>
        )
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
})

function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)*/