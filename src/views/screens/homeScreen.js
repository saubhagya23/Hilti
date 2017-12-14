import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
//import { Font } from 'expo'
import PageHeader from '../common/pageHeader'
import VideoComp from './homeContent'
import HomeNavContainer from '../common/HomeNavContainer'
import { connect } from 'react-redux';
import Modal from 'react-native-modal'
import Icon  from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component {

    state = {
        videoPlay:true,
        playbackObject : null,
        isModalVisible: true,
        fontLoaded:false,
    };

    /*async componentWillMount(){
        await Font.loadAsync({
            'hilti-bold': require('../../assets/fonts/Hilti-Bold.ttf'),
            'hilti-roman': require('../../assets/fonts/Hilti-Roman.ttf'),
        });
        this.setState({
            fontLoaded:true,
        })

        /!*const { downloadIdProofEvent } = this.props;
        downloadIdProofEvent();*!/
    }*/


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
        if(this.props.userDetail){
            user = this.props.userDetail;
        }

        if(typeof this.props.userDetail === "string"){
            user = JSON.parse(this.props.userDetail)
        }
        // console.log('userDetails home screen--->>>>',this.props.userDetail);
        return(
            <View style={styles.container}>

                <Modal isVisible={this.state.isModalVisible} backdropColor={'#ffffff'} onBackdropPress={() => {this.setState({isModalVisible:false})}} animationIn={'fadeIn'} animationOut={'fadeOut'}>
                    <View style={{ flex: 1 , justifyContent:'center',alignItems:'center',paddingBottom:15}}>
                        <View style={{backgroundColor:"#ffffff",height:350,width:280,borderWidth:2,borderColor:'#dd2127',borderRadius:5}}>
                            <View style={{flexDirection:'row',justifyContent:'center',margin:15}}>
                                <Text style={{fontSize:16,fontWeight:'bold'}}>Profile</Text>
                                <Icon style={{marginLeft:'auto'}} size={20} name='close' onPress={() => {this.setState({isModalVisible:false})}}/>
                            </View>

                            <View style={{height:1,marginLeft:15,marginRight:15,backgroundColor:'grey'}}/>

                            <View style={{justifyContent:'center',alignItems:'flex-start'}}>
                                <View style={{flexDirection:"row",marginLeft:15,marginTop:10}}>
                                    <Icon style={{marginTop:4}} name='user'/>
                                    <Text style={{marginLeft:10}}>Name</Text>
                                </View>
                                <Text style={{color:'grey',marginLeft:35}}>{user.Name}</Text>

                                <View style={{flexDirection:"row",marginLeft:12,marginTop:10}}>
                                    <Icon style={{marginTop:4}} name="group"/>
                                    <Text style={{marginLeft:10}}>Team</Text>
                                </View>
                                <Text style={{color:'grey',marginLeft:35}}>{user.Team}</Text>

                                <View style={{flexDirection:"row",marginLeft:15,marginTop:10}}>
                                    <Icon style={{marginTop:4}} name="map-marker" size={15}/>
                                    <Text style={{marginLeft:11}}>Location</Text>
                                </View>
                                <Text style={{color:'grey',marginLeft:35}}>{user.Location}</Text>

                                <View style={{flexDirection:"row",marginLeft:13,marginTop:10}}>
                                    <Icon style={{marginTop:4}} name="sitemap" size={13}/>
                                    <Text style={{marginLeft:10}}>Team Category</Text>
                                </View>
                                <Text style={{color:'grey',marginLeft:35}}>{user.Code}</Text>

                                <View style={{flexDirection:"row",marginLeft:13,marginTop:10}}>
                                    <Icon style={{marginTop:4}} name="id-card"/>
                                    <Text style={{marginLeft:9,fontWeight:'bold'}}>Group Name</Text>
                                </View>
                                <Text style={{color:'grey',marginLeft:35,fontWeight:'bold'}}>{user.Code}</Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/*HomeScreen code*/}
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

