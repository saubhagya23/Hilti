import React, {Component} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PageHeader from '../common/pageHeader'
import VideoComp from './homeContent'
import HomeNavContainer from '../common/HomeNavContainer'
import { connect } from 'react-redux';

class HomeScreen extends Component {

    state = {
        videoPlay:true,
        playbackObject : null
    };


    _handleVideoRef = component => {
        this.setState({
            playbackObject:component
        });
    };

    pauseVideo = () => {
        if(this.state.playbackObject !== null)
        this.state.playbackObject.pauseAsync();
    };

    render(){
        let user;
        if(typeof this.props.userDetail === "string"){
            user = JSON.parse(this.props.userDetail)
        }
        return(
            <View style={styles.container}>
                <View style={{height:38}}>
                    <PageHeader navigation={this.props.navigation} showBell={true} showUser={true} pauseVideo={this.pauseVideo}/>
                </View>
                <View style={{height:179.5,marginTop:2}}>
                    <VideoComp videoPlay={this.state.videoPlay} _handleVideoRef={this._handleVideoRef}/>
                </View>
                <ScrollView>
                    <View style={{height:137.5,marginLeft:7,marginRight:7, marginTop:16.5,backgroundColor:'#f5f3ee',flexDirection:'row'}}>
                        {/*travel nav container*/}
                        <HomeNavContainer
                            navigationPage='TravelNavigation'
                            imgSrc={require('../../assets/images/travelers/travelers_mdpi.png')}
                            titleText='TRAVEL'
                            homeNavProps={this.props}
                            pauseVideo={this.pauseVideo}
                        />

                        {/*venue nav container*/}
                        <HomeNavContainer
                            navigationPage='Venue'
                            imgSrc={require('../../assets/images/venue/venue_mdpi.png')}
                            titleText='VENUE'
                            homeNavProps={this.props}
                            pauseVideo={this.pauseVideo}
                        />

                        {/*dress-code nav container*/}
                        <HomeNavContainer
                            navigationPage='DressCodeNavigation'
                            imgSrc={require('../../assets/images/dress_code/dress_code_mdpi.png')}
                            titleText='DRESS CODE'
                            homeNavProps={this.props}
                            pauseVideo={this.pauseVideo}
                        />
                    </View>
                    <View style={{height:136.5, marginLeft:7,marginRight:7,backgroundColor:'#f5f3ee',flexDirection:'row'}}>
                        {/*agenda nav container*/}
                        <HomeNavContainer
                            navigationPage='AgendaNavigation'
                            imgSrc={require('../../assets/images/agenda/agenda_mdpi.png')}
                            titleText='AGENDA'
                            homeNavProps={this.props}
                            pauseVideo={this.pauseVideo}
                        />

                        {/*stay overview nav container*/}
                        <HomeNavContainer
                            navigationPage='StayNavigation'
                            imgSrc={require('../../assets/images/stay/stay_mdpi.png')}
                            titleText='STAY OVERVIEW'
                            homeNavProps={this.props}
                            pauseVideo={this.pauseVideo}
                        />

                        {/*experience corner nav container*/}
                        <HomeNavContainer
                            navigationPage='ExperienceCorner'
                            imgSrc={require('../../assets/images/exp-corner/experience_corner_mdpi.png')}
                            titleText='EXPERIENCE CORNER'
                            homeNavProps={this.props}
                            pauseVideo={this.pauseVideo}
                        />
                    </View>
                    <View style={{height:136.5,marginLeft:7,marginRight:7,backgroundColor:'#f5f3ee',flexDirection:'row'}}>
                        {/*organisational information nav container*/}
                        {/*<StandaloneNav
                        navigationPage='TravelNavigation'
                        imgSrc={require('../../assets/images/org_info/org_info_mdpi.png')}
                        titleText='ORGANISATIONAL INFORMATION'

                        homeNavProps={this.props}/>*/}

                        <HomeNavContainer
                            navigationPage='OrgInfoNavigation'
                            imgSrc={require('../../assets/images/org_info/org_info_mdpi.png')}
                            titleText='ORG. INFORMATION'
                            homeNavProps={this.props}
                            pauseVideo={this.pauseVideo}
                        />

                        {/*assistance nav container*/}
                        <HomeNavContainer
                            navigationPage='AssistanceNavigation'
                            imgSrc={require('../../assets/images/assistance/assistance_mdpi.png')}
                            titleText='NEED ASSISTANCE'
                            homeNavProps={this.props}
                            pauseVideo={this.pauseVideo}
                        />

                        {/*post comment nav container*/}
                        {
                            user && user.role === "user"?
                                <HomeNavContainer
                                    navigationPage='Comments'
                                    imgSrc={require('../../assets/images/post_comments/post_comments_mdpi.png')}
                                    titleText='POST YOUR COMMENTS'
                                    homeNavProps={this.props}
                                    pauseVideo={this.pauseVideo}
                                />:
                                <HomeNavContainer
                                    navigationPage='AdminComment'
                                    imgSrc={require('../../assets/images/post_comments/post_comments_mdpi.png')}
                                    titleText='POST YOUR COMMENTS'
                                    homeNavProps={this.props}
                                    pauseVideo={this.pauseVideo}
                                />
                        }

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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

function mapStateToProps (state) {
    return {
        // eventLoginList: state.event.eventLoginList,
        userDetail:state.event.userDetail
    }
}

export default connect(mapStateToProps, null)(HomeScreen)

