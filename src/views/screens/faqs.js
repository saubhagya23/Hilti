import React, {Component} from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import PageHeaderNotif from '../common/pageHeaderNotif'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Font } from 'expo'

export default class DosDonts extends Component {
    state = {
        fontLoaded:false
    }


    async componentWillMount(){
        await Font.loadAsync({
            'hilti-bold': require('../../assets/fonts/Hilti-Bold.ttf'),
            'hilti-roman': require('../../assets/fonts/Hilti-Roman.ttf'),
        });
        this.setState({
            fontLoaded:true
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.fontLoaded ?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage={`FAQs`} navigation={this.props.navigation}/>
                        <View style={{backgroundColor:'#f5f3ee'}}>
                            <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#dd2127',marginTop:16.5,marginLeft:19}}>FAQ HILTI INDIA - KICK OFF 2018</Text>
                            <View style={{backgroundColor:'#ffffff',marginTop:16}}>
                                <ScrollView>
                                    <View style={{justifyContent:'center', alignItems:'flex-start'}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Icon
                                                style={{color:'#000000',marginLeft:19.5,marginTop:25}}
                                                name='circle'
                                                size={10}
                                            />
                                            <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginLeft:10,marginTop:21.5,marginRight:20}}>When will be my check-in at the Hotel?</Text>
                                        </View>
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:29.5,marginTop:18,marginRight:30}}>
                                            Check-in for outstationed team members will be as per their arrival time. Delhi/NCR team members will have check-ins starting from 1100 hrs.
                                            Therefore, please try to reach the venue by 1030 hrs and do the bag tagging followed by the Check-in followed by Lunch from 1200 - 1315 hrs.
                                            All the Delhi/NCR team members and the outstationed team members who are reaching by flight after 0900 hrs arrival are requested to come wearing Red
                                            Hilti Shirt, so that you could join the Kick off well in time. (The red shirts will be dispatched to the TMs, who had requested Red Shirt in Nov for the Kick off 2018;
                                            on Jan 02, 2018. Sorry for the delay but due to de-monetisation effect on the unorganised sector, this delay has occured. Thank you for the
                                            patience and understanding.)
                                        </Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Icon
                                                style={{color:'#000000',marginLeft:19.5,marginTop:25}}
                                                name='circle'
                                                size={10}
                                            />
                                            <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:10,marginRight:60}}>I want to make some changes in my Travel Plan, whom to contact?</Text>
                                        </View>
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:29.5,marginTop:18,marginRight:20}}>
                                            Now, there is no such provision of any change in the travel plan. Should you have any personal plan, please make your own travel arrangements.
                                        </Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Icon
                                                style={{color:'#000000',marginLeft:19.5,marginTop:25}}
                                                name='circle'
                                                size={10}
                                            />
                                            <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:10,marginRight:60}}>I want to request change in my room sharing, whom to contact?</Text>
                                        </View>
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:29.5,marginTop:18,marginRight:20,marginBottom:20}}>
                                            There is no such provision of any change in the Room Sharing.
                                        </Text>
                                        {/*<View style={{flexDirection:'row'}}>
                                            <Icon
                                                style={{color:'#000000',marginLeft:19.5,marginTop:25}}
                                                name='circle'
                                                size={10}
                                            />
                                            <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:10,marginRight:30}}>
                                                I or my Team member has change in the location due to recent announcement and
                                                consequently the location from/to should be changed as per new profile but it
                                                is not reflecting in the existing list?
                                            </Text>
                                        </View>
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:29.5,marginTop:18,paddingBottom:20}}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Text>*/}
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View> :null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f3ee'
    },
})


