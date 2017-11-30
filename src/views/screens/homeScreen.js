import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import PageHeader from '../common/pageHeader'
import VideoComp from './homeContent'
import HomeNavContainer from '../common/HomeNavContainer'
import StandaloneNav from '../common/StandaloneNav'

class HomeScreen extends Component {
    render(){
        //console.log('props in homescreen is -----',this.props);
        return(
            <View style={styles.container}>
                <View style={{height:38}}>
                    <PageHeader/>
                </View>
                <View style={{height:179.5}}>
                    <VideoComp/>
                </View>
                <View style={{height:137.5,marginLeft:7,marginRight:7, marginTop:16.5,backgroundColor:'#f5f3ee',flexDirection:'row'}}>
                    {/*travel nav container*/}
                    <HomeNavContainer
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/travelers/travelers_mdpi.png')}
                        titleText='TRAVEL'
                        homeNavProps={this.props}/>

                    {/*venue nav container*/}
                    <HomeNavContainer
                        navigationPage='VenueNavigation'
                        imgSrc={require('../../assets/images/venue/venue_mdpi.png')}
                        titleText='VENUE'
                        homeNavProps={this.props}/>

                    {/*dress-code nav container*/}
                    <HomeNavContainer
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/dress_code/dress_code_mdpi.png')}
                        titleText='DRESS CODE'
                        homeNavProps={this.props}/>
                </View>
                <View style={{height:136.5, marginLeft:7,marginRight:7,backgroundColor:'#f5f3ee',flexDirection:'row'}}>
                    {/*agenda nav container*/}
                    <HomeNavContainer
                        navigationPage='AgendaNavigation'
                        imgSrc={require('../../assets/images/agenda/agenda_mdpi.png')}
                        titleText='AGENDA'
                        homeNavProps={this.props} />

                    {/*stay overview nav container*/}
                    <HomeNavContainer
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/stay/stay_mdpi.png')}
                        titleText='STAY OVERVIEW'
                        homeNavProps={this.props} />

                    {/*experience corner nav container*/}
                    <HomeNavContainer
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/exp-corner/experience_corner_mdpi.png')}
                        titleText='EXPERIENCE CORNER'
                        homeNavProps={this.props}/>
                </View>
                <View style={{height:92.5,marginLeft:7,marginRight:7,backgroundColor:'#f5f3ee'}}>
                    {/*organisational information nav container*/}
                    <StandaloneNav
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/org_info/org_info_mdpi.png')}
                        titleText='ORGANISATIONAL INFORMATION'

                        homeNavProps={this.props}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1,
        backgroundColor:'#f5f3ee'
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