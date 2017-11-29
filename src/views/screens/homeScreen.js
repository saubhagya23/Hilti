import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import PageHeader from '../common/pageHeader'
import VideoComp from './homeContent'
import HomeNavContainer from '../common/HomeNavContainer'

class HomeScreen extends Component {
    render(){
        //console.log('props in homescreen is -----',this.props);
        return(
            <View style={styles.container}>
                <View style={{height:38,width:360}}>
                    <PageHeader/>
                </View>
                <View style={{height:179.5,width:360}}>
                    <VideoComp/>
                </View>
                <View style={{height:137.5, marginTop:16.5, marginLeft:7.5, marginRight:8.5, backgroundColor:'#f5f3ee',flexDirection:'row'}}>
                    {/*travel nav container*/}
                    <HomeNavContainer
                        conHeight={137.5}
                        conWidth={111.5}
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/travelers/travelers_mdpi.png')}
                        imgHeight={103.5}
                        imgWidth={111.5}
                        titleText='TRAVEL'
                        titleConHeight={34}
                        titleConWidth={111.5}
                        titleHeight={11}
                        titleWidth={40}
                        titleMarLeft={15}
                        titleMarTop={13}
                        homeNavProps={this.props}/>

                    {/*venue nav container*/}
                    <HomeNavContainer
                        conHeight={137.5}
                        conWidth={111}
                        conMarLeft={5}
                        navigationPage='VenueNavigation'
                        imgSrc={require('../../assets/images/venue/venue_mdpi.png')}
                        imgHeight={103.5}
                        imgWidth={111}
                        titleText='VENUE'
                        titleConHeight={34}
                        titleConWidth={111}
                        titleHeight={11}
                        titleWidth={35}
                        titleMarLeft={15}
                        titleMarTop={13.5}
                        homeNavProps={this.props}/>

                    {/*dress-code nav container*/}
                    <HomeNavContainer
                        conHeight={137.5}
                        conWidth={111}
                        conMarLeft={5.5}
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/dress_code/dress_code_mdpi.png')}
                        imgHeight={100.5}
                        imgWidth={101}
                        titleText='DRESS CODE'
                        titleConHeight={34}
                        titleConWidth={111}
                        titleHeight={11}
                        titleWidth={68}
                        titleMarLeft={15}
                        titleMarTop={13.5}
                        homeNavProps={this.props}/>
                </View>
                <View style={{height:136.5, marginTop:6, marginLeft:7.5, marginRight:8.5, backgroundColor:'#f5f3ee',flexDirection:'row'}}>
                    {/*agenda nav container*/}
                    <HomeNavContainer
                        conHeight={136.5}
                        conWidth={111}
                        navigationPage='AgendaNavigation'
                        imgSrc={require('../../assets/images/agenda/agenda_mdpi.png')}
                        imgHeight={102.5}
                        imgWidth={111}
                        titleText='AGENDA'
                        titleConHeight={34}
                        titleConWidth={111}
                        titleHeight={11}
                        titleWidth={44}
                        titleMarLeft={15}
                        titleMarTop={13}
                        homeNavProps={this.props}/>

                    {/*stay overview nav container*/}
                    <HomeNavContainer
                        conHeight={136.5}
                        conWidth={111}
                        conMarLeft={5}
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/stay/stay_mdpi.png')}
                        imgHeight={102.5}
                        imgWidth={111}
                        titleText='STAY OVERVIEW'
                        titleConHeight={34}
                        titleConWidth={111}
                        titleHeight={11}
                        titleWidth={84.5}
                        titleMarLeft={14.5}
                        titleMarTop={13.5}
                        homeNavProps={this.props}/>

                    {/*experience corner nav container*/}
                    <HomeNavContainer
                        conHeight={136.1}
                        conWidth={111.2}
                        conMarLeft={5.5}
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/exp-corner/experience_corner_mdpi.png')}
                        imgHeight={102.1}
                        imgWidth={111.2}
                        titleText='EXPERIENCE CORNER'
                        titleConHeight={34}
                        titleConWidth={111.2}
                        titleHeight={23}
                        titleWidth={65}
                        titleMarLeft={14.5}
                        titleMarTop={7.5}
                        homeNavProps={this.props}/>
                </View>
                <View style={{height:92.5, marginTop:6, marginLeft:8, marginRight:8.5, backgroundColor:'#f5f3ee'}}>
                    {/*organisational information nav container*/}
                    <HomeNavContainer
                        conHeight={92.5}
                        conWidth={343.5}
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/org_info/org_info_mdpi.png')}
                        imgHeight={78}
                        imgWidth={84.5}
                        imgMarLeft={69.5}
                        imgMarTop={8}
                        titleText='ORGANISATIONAL INFORMATION'
                        titleConHeight={92.5}
                        titleConWidth={115}
                        titleConMarLeft={74.5}
                        titleHeight={23}
                        titleWidth={93}
                        titleMarLeft={15.5}
                        titleMarTop={37}
                        direction='row'
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