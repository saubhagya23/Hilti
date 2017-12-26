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
                    <View style={{flex: 1}}>
                        <PageHeaderNotif props={this.props} parentPage={`DO\'S & DON\'T\'S`} navigation={this.props.navigation}/>
                        <ScrollView>
                        <View style={{backgroundColor:'#f5f3ee'}}>
                            <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#dd2127',marginTop:16.5,marginLeft:19}}>BEFORE KICK OFF</Text>
                            <View style={{backgroundColor:'#ffffff',height:490,marginTop:16}}>
                                <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:19.5}}>Do's</Text>
                                {/*<View style={{flexDirection:'row',marginRight:27.5}}>
                                    <Icon
                                        style={{color:'#000000',marginLeft:21,marginTop:32}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Go through all the data provided on Kick off 2018 App/Share-point Kick off 2018 Webpage.
                                    </Text>
                                </View>*/}
                                <View style={{flexDirection:'row',marginRight:27.5}}>
                                    <Icon
                                        style={{color:'#000000',marginLeft:21,marginTop:32}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Check your ticket before hand and in case of any discrepancy, please send your concern through the App under Travel Related Query or write at Teamannualkickoff.in@hilti.com
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',marginRight:27.5}}>
                                    <Icon
                                        style={{color:'#000000',marginLeft:21,marginTop:32}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Download your ticket and keep it safe with you and plan to carry your identity proof with you.
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',marginRight:27.5}}>
                                    <Icon
                                        style={{color:'#000000',marginLeft:21,marginTop:32}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Plan to arrive 2 hours early at the airport to avoid missing your flight
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',marginRight:27.5}}>
                                    <Icon
                                        style={{color:'#000000',marginLeft:21,marginTop:32}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Carry your Employee ID card.
                                    </Text>
                                </View>
                                <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:19.5}}>Don't's</Text>
                                <View style={{flexDirection:'row',marginRight:27.5}}>
                                    <Icon
                                        style={{color:'#000000',marginLeft:21,marginTop:32}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Request to change the room sharing or travel plan on your personal account.
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',marginRight:27.5}}>
                                    <Icon
                                        style={{color:'#000000',marginLeft:21,marginTop:32}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Call us to know the details which are already available in the Kick off App/Share-point Kick off 2018 Webpage.
                                    </Text>
                                </View>
                            </View>
                            <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#dd2127',marginTop:16.5,marginLeft:19}}>DURING KICK OFF</Text>
                            <View style={{backgroundColor:'#ffffff',height:250,marginTop:16}}>
                                <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:19.5}}>Do's</Text>
                                    <View style={{flexDirection:'row',marginRight:27.5}}>
                                        <Icon
                                            style={{color:'#000000',marginLeft:21,marginTop:32}}
                                            name='circle'
                                            size={10}
                                        />
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                            Be punctual to meeting timings and arrive at the venue atleast 15 minutes prior to the meeting time.
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginRight:27.5}}>
                                        <Icon
                                            style={{color:'#000000',marginLeft:21,marginTop:32}}
                                            name='circle'
                                            size={10}
                                        />
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                            Keep your mobile on silent mode during the meeting.
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginRight:27.5}}>
                                        <Icon
                                            style={{color:'#000000',marginLeft:21,marginTop:32}}
                                            name='circle'
                                            size={10}
                                        />
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                            Come prepared to celebrate, connect and contemplate.
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginRight:27.5}}>
                                        <Icon
                                            style={{color:'#000000',marginLeft:21,marginTop:32}}
                                            name='circle'
                                            size={10}
                                        />
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                            Check-out in the morning of the day of departure.
                                        </Text>
                                    </View>
                            </View>
                        </View>
                    </ScrollView>
                    </View>:null
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


