import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PageHeader from '../common/pageHeader'
import VideoComp from './homeContent'
import HomeNavContainer from '../common/HomeNavContainer'

class HomeScreen extends Component {
    render(){
        //console.log('props in homescreen is -----',this.props);
        return(
            <View style={styles.container}>
                <View style={{flex:0.1}}>
                    <PageHeader/>
                </View>
                <View style={{flex:0.3}}>
                    <VideoComp/>
                </View>
                <View style={{flex:0.6,alignItems:'center',justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'}}>
                    <HomeNavContainer navigationPage='TravelNavigation' imgSrc={require('../../assets/images/mdpi.png')} titleText='Travel' homeNavProps={this.props}/>
                    <HomeNavContainer navigationPage='TravelNavigation' imgSrc={require('../../assets/images/mdpi.png')} titleText='Venue' homeNavProps={this.props}/>
                    <HomeNavContainer navigationPage='TravelNavigation' imgSrc={require('../../assets/images/mdpi.png')} titleText='Dress Code' homeNavProps={this.props}/>
                    <HomeNavContainer navigationPage='TravelNavigation' imgSrc={require('../../assets/images/mdpi.png')} titleText='Agenda' homeNavProps={this.props}/>
                    <HomeNavContainer navigationPage='TravelNavigation' imgSrc={require('../../assets/images/mdpi.png')} titleText='Stay Overview' homeNavProps={this.props}/>
                    <HomeNavContainer navigationPage='TravelNavigation' imgSrc={require('../../assets/images/mdpi.png')} titleText='Attraction Corner' homeNavProps={this.props}/>
                    <HomeNavContainer navigationPage='TravelNavigation' imgSrc={require('../../assets/images/mdpi.png')} direction='row' titleText='Organisational Information' homeNavProps={this.props}/>
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