import React, {Component} from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import PageHeaderNotif from '../common/pageHeaderNotif'
import { Font } from 'expo'
import Icon  from 'react-native-vector-icons/FontAwesome'

export default class OrgInfo extends Component {
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

    render(){
        return(
            <View style={styles.container}>
                {this.state.fontLoaded ?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage={`ORG. INFO.`} navigation={this.props.navigation}/>
                        <Text style={{marginTop:15,marginLeft:20,fontFamily:'hilti-roman',fontSize:14,color:'#dd2127'}}>Organisational Information</Text>
                        <View style={{marginTop:15,flex:1,backgroundColor:'#ffffff',alignItems:'flex-start',justifyContent:'center'}}>
                            <ScrollView>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#dd2127',marginLeft:19.5,marginTop:25}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{color:'#dd2127',fontFamily:'hilti-bold',fontSize:12,marginLeft:10,marginTop:21.5,marginRight:20}}>Venue :</Text>
                                </View>
                                <View style={{marginLeft:30,marginRight:60}}>
                                    <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:15}}>THE LEELA AMBIENCE CONVENTION HOTEL, EAST DELHI</Text>
                                    <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:4}}>CBD Maharaj Surajmal Road, Near Yamuna Sports Complex, Delhi 110 032</Text>
                                    <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:4}}>https://www.theleela.com/en_us/hotels-in-delhi/the-leela-ambience-convention-hotel-delhi/</Text>
                                </View>

                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#dd2127',marginLeft:19.5,marginTop:25}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{color:'#dd2127',fontFamily:'hilti-bold',fontSize:12,marginLeft:10,marginTop:21.5,marginRight:20}}>Expense :</Text>
                                </View>
                                <View style={{marginLeft:30,marginRight:60}}>
                                    <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:15}}>
                                        Expense for (accommodation, meals(bf/Lunch/Dinner) + Wifi - Standard package) at the Kick off
                                        2018 Venue - The Leela Ambience Convention Hotel, East Delhi from Jan 09 - Jan 11, 2018, as per
                                        the arrival and departure list, will be borne by the company. Each member is required to pay any
                                        incidentals such as telephone calls, minibar, room service, laundry, cigarette, late check-out
                                        etc when checking out. Hotel bills for any additional nights and late check-out must also be
                                        settled individually.
                                    </Text>
                                </View>

                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#dd2127',marginLeft:19.5,marginTop:25}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{color:'#dd2127',fontFamily:'hilti-bold',fontSize:12,marginLeft:10,marginTop:21.5,marginRight:50}}>Instructions for the Team members travelling in flight :</Text>
                                </View>
                                <View style={{marginLeft:30,marginRight:60}}>
                                    <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:15}}>
                                        Team members who are planned to take flight are suggested to reach at the airport atleast
                                        2 hours prior to the departure of flight to avoid any lack of time in check-in. In case of
                                        missing the flight, Hilti India shall not be responsible to book another flight.
                                    </Text>

                                    <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:9}}>
                                        Please do not forget to carry print-out of your tickets/ download your ticket in your mobile
                                        to show at the airportor in railways.
                                    </Text>

                                    <Text style={{color:'#000000',fontSize:11,fontFamily:'hilti-roman',marginTop:9}}>
                                        Also carry your govt authorised identity card (voter id/ driving license/ adhaar card/
                                        passport etc) with you as it is mandatory to board flight/train.
                                    </Text>
                                </View>

                            </ScrollView>
                        </View>
                    </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f3ee'
    },
})