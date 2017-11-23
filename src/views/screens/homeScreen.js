import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PageHeader from '../common/pageHeader'
import VideoComp from './homeContent'
import HomeNavContainer from '../common/HomeNavContainer'

class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:0.1}}>
                    <PageHeader/>
                </View>
                <View style={{flex:0.3}}>
                    <VideoComp/>
                </View>
                <View style={{flex:0.6,alignItems:'center',justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'}}>
                    <HomeNavContainer imgSrc='../../assets/images/mdpi.png' titleText='Travel'/>
                    <HomeNavContainer imgSrc='../../assets/images/mdpi.png' titleText='Venue'/>
                    <HomeNavContainer imgSrc='../../assets/images/mdpi.png' titleText='Dress Code'/>
                    <HomeNavContainer imgSrc='../../assets/images/mdpi.png' titleText='Agenda'/>
                    <HomeNavContainer imgSrc='../../assets/images/mdpi.png' titleText='Stay Overview'/>
                    <HomeNavContainer imgSrc='../../assets/images/mdpi.png' titleText='Attraction Corner'/>
                    <HomeNavContainer imgSrc='../../assets/images/mdpi.png' direction='row' titleText='Organisational Information'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1
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

export default HomeScreen;