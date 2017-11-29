import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons'
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'
import { Font } from 'expo'

class AgendaDay1 extends Component{
    constructor(){
        super();

        this.state = {
            fontLoaded:false
        }
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
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage='Day1'/>

                            <View style={{height:242.5}}>
                                <Image
                                    style={{position:'relative',height:168.5}}
                                    source={require('../../assets/images/agendaMainImg/agendaMainImg_mdpi.png')}
                                />
                                <Image
                                    style={{position:'absolute',width:214,height:168.5}}
                                    source={require('../../assets/images/shape_imh/shape_imh.png')}
                                />
                                <Text
                                    style={{position:'absolute',
                                        marginTop:20.5,
                                        marginLeft:18.5,
                                        width:133.5,
                                        height:31.5,
                                        fontSize:14,
                                        color:'#dd2127',
                                        fontFamily:'hilti-roman'}}>
                                    MO INDIA KICK OFF 2016</Text>

                                <Text
                                    style={{position:'absolute',
                                        marginTop:61,
                                        marginLeft:18.5,
                                        width:139,
                                        height:25,
                                        fontSize:10,
                                        letterSpacing:0.05,
                                        color:'#7c294e',
                                        fontFamily:'hilti-bold'}}>
                                    Participants : MO India Team (Functional Meetings)
                                </Text>

                                <View style={{backgroundColor:'#dd2127',height:70,width:63.5,position:'absolute',zIndex:1,marginTop:153,marginLeft:8.5,padding:5,alignItems:'center'}}>
                                    <Text style={{flex:2,textAlign:'center',width:43,lineHeight:35,fontSize:38.5,fontFamily:'hilti-roman',color:'#ffffff'}}>28</Text>
                                    <Text style={{flex:1,textAlign:'center',width:33,marginTop:3.5,fontFamily:'hilti-roman',fontSize:15,color:'#ffffff'}}>JAN</Text>
                                </View>

                                <View style={{height:74,width:360,marginTop:168.5,backgroundColor:'#ffffff',position:'absolute'}}>
                                    <Text style={{marginLeft:89,marginTop:11.5,height:17.5,color:'#d2051e',fontSize:15,fontFamily:'hilti-roman'}}>LEELA AMBIENCE, DELHI</Text>

                                    <View style={{flexDirection:'row'}}>
                                        <Image
                                            style={{marginLeft:89.5,marginTop:6,width:6.5,height:9.5}}
                                            source={require('../../assets/images/location_icon/location_icon_mdpi.png')}
                                        />
                                        <View style={{marginLeft:4.5,marginTop:4,height:21.5,width:168}}>
                                            <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:9,lineHeight:13}}>
                                                8, NH148A, Ambience Island,Nathupur, Sector-24, Gurugram, Haryana</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <ScrollView>
                                <Text style={{marginLeft:19,marginTop:11,height:10.5,fontSize:9,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                    MARKETING REACH TEAM
                                </Text>
                                <Text style={{marginLeft:19,marginTop:8.5,height:10,fontSize:9,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                    Dress Code: Hilti red shirt+Coat/Blazer+Dark Trouser/Skirt
                                </Text>

                                <View style={{backgroundColor:'#ffffff',marginTop:12.5,marginLeft:8,marginRight:9,height:183.5}}>
                                    <Text style={{marginLeft:11,marginTop:16.5,height:12.5,fontSize:10,fontFamily:'hilti-bold',color:'#000000'}}>
                                        Trade Application Demo Session
                                    </Text>
                                    <Text style={{marginLeft:12,marginTop:3.5,height:11,fontSize:8,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                        (Please refer your respective detailed agenda)
                                    </Text>

                                    <View style={{flexDirection:'row'}}>
                                        <Image
                                            style={{marginLeft:13,marginTop:5,width:7.5,height:7.5,opacity:0.6}}
                                            source={require('../../assets/images/watch_icon/watch_icon_hdpi.png')}
                                        />
                                        <Text style={{marginLeft:4.5,marginTop:2.5,height:10,fontSize:8,fontFamily:'hilti-roman',color:'#000000'}}>
                                            9:00 - 18:00,
                                        </Text>
                                        <Text style={{marginLeft:3.5,marginTop:2.5,height:10,fontSize:8,fontFamily:'hilti-roman',color:'#888888'}}>
                                            9 Hr
                                        </Text>
                                    </View>

                                    <Text style={{marginLeft:12,marginTop:8.5,height:11.5,fontSize:9,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>
                                        Participants :
                                    </Text>
                                    <View style={{width:215.5,height:80.5,marginLeft:12,marginTop:5}}>
                                        <Text style={{fontSize:9,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                            Sales (Mainstream – N/C)
                                        </Text>
                                        <Text style={{fontSize:9,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                            Sales (Mainstream – W/S)
                                        </Text>
                                        <Text style={{fontSize:9,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                            Sales – E&I
                                        </Text>
                                        <Text style={{fontSize:9,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                            Key Accounts & Engineering
                                        </Text>
                                        <Text style={{fontSize:9,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                            E&I (Technical),
                                        </Text>
                                        <Text style={{fontSize:9,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                            Marketing – Trade, PLS & Strategic Marketing Team
                                        </Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor:'#ffffff',marginTop:5,marginLeft:8,marginRight:9,height:140.5,marginBottom:9.5}}>
                                    <Text style={{marginLeft:11.5,marginTop:16.5,height:13,fontSize:10,fontFamily:'hilti-bold',color:'#000000'}}>
                                        Functional Meetings
                                    </Text>
                                    <Text style={{marginLeft:12,marginTop:3.5,height:11,fontSize:8,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                        (Please refer your respective detailed agenda)
                                    </Text>

                                    <Text style={{marginLeft:12,marginTop:7,width:262,height:21.5,fontSize:9,fontFamily:'hilti-roman',lineHeight:12,color:'#000000',opacity:0.8,}}>
                                        Finance, HR, Marketing-GCC, Operations, Professional Service, Supply Chain
                                    </Text>

                                    <View style={{flexDirection:'row'}}>
                                        <Image
                                            style={{marginLeft:13,marginTop:9,width:7.5,height:7.5,opacity:0.6}}
                                            source={require('../../assets/images/watch_icon/watch_icon_hdpi.png')}
                                        />
                                        <Text style={{marginLeft:5.5,marginTop:6.5,height:10,fontSize:8,fontFamily:'hilti-roman',color:'#000000'}}>
                                            9:00 - 18:00,
                                        </Text>
                                        <Text style={{marginLeft:3.5,marginTop:6.5,height:10,fontSize:8,fontFamily:'hilti-roman',color:'#888888'}}>
                                            9 Hr
                                        </Text>
                                    </View>

                                    <Text style={{marginLeft:12,marginTop:9.5,height:11.5,fontSize:9,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>
                                        Participants :
                                    </Text>

                                    <Text style={{marginLeft:11.5,marginTop:3,fontSize:9,fontFamily:'hilti-roman',color:'#000000',opacity:0.6,lineHeight:15}}>
                                        All respective team members.
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        backgroundColor:'#f5f3ee'
    },
    agendaMainImg: {
        flex:1,
        resizeMode:'stretch'
    }
})

export default AgendaDay1;