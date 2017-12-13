import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons'
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'
import { Font } from 'expo'

class AgendaDay extends Component{
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
        let dummyData = [
            {
                userType:'Trainee',
                group:'ASM-TM Group 1',
                agenda:'Infra strategy launch',
                grpCoordinator:'Mohit Kumar',
                trainer:'Mohit Vasistha',
                dressCode:'Smart casual, safety shoes',
                location:'classroom 1',
                from:'13:30',
                to:'14:13'
            },
            {
                userType:'Trainer',
                group:'ASM1, ASM2, ASM3',
                grpVisiting:'Infra strategy launch',
                grpCoordinator:'Mohit Kumar',
                trainer:'Ashish Markande/Ashish Mittal',
                dressCode:'Smart casual, safety shoes',
                location:'classroom 1',
                from:'13:30',
                to:'14:13'
            }
        ]
        return(
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage='Day1' navigation={this.props.navigation}/>
                             <ScrollView>
                                 <View style={{height:242.5}}>
                                     <Image
                                         style={{flex:1, width:null, height:null}}
                                         source={require('../../assets/images/agendaMainImg/agendaMainImg_mdpi.png')}
                                         resizeMode={'cover'}
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
                                         MO INDIA KICK OFF 2018</Text>

                                     <Text
                                         style={{position:'absolute',
                                             marginTop:61,
                                             marginLeft:18.5,
                                             // width:139,
                                             height:25,
                                             fontSize:10,
                                             letterSpacing:0.05,
                                             color:'#7c294e',
                                             fontFamily:'hilti-bold'}}>
                                         Participants : MO India Team
                                     </Text>
                                     <View style={{position:'absolute', height:80, bottom:0, left:0, right:0, flexDirection:'row', backgroundColor:'#fff'}}>
                                         <View style={{flex:1, position:'relative'}}>
                                             <View style={{backgroundColor:'#dd2127',height:70,width:63.5,position:'absolute',left:20, top:-20,zIndex:1,padding:5,alignItems:'center'}}>
                                                 <Text style={{flex:2,textAlign:'center',width:43,lineHeight:35,fontSize:38.5,fontFamily:'hilti-roman',color:'#ffffff'}}>28</Text>
                                                 <Text style={{flex:1,textAlign:'center',width:33,marginTop:3.5,fontFamily:'hilti-roman',fontSize:15,color:'#ffffff'}}>JAN</Text>
                                             </View>

                                         </View>
                                         <View style={{flex:3}}>
                                             <View style={{flex:1}}>
                                                 <Text style={{marginTop:11.5,height:17.5,color:'#d2051e',fontSize:15,fontFamily:'hilti-roman'}}>LEELA AMBIENCE, DELHI</Text>

                                                 <View style={{flexDirection:'row'}}>
                                                     {/*<Image
                                                   style={{marginTop:6,width:6.5,height:9.5}}
                                                   source={require('../../assets/images/location_icon/location_icon_mdpi.png')}
                                                 />*/}

                                                     <Icon
                                                         style={{marginTop:6}}
                                                         name='location'
                                                         size={15}
                                                         onPress={() => {}} />
                                                     <View style={{marginLeft:4.5,marginTop:4,height:21.5,width:168}}>
                                                         <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,lineHeight:13}}>
                                                             8, NH148A, Ambience Island,Nathupur, Sector-24, Gurugram, Haryana</Text>
                                                     </View>
                                                 </View>
                                             </View>
                                         </View>
                                     </View>
                                 </View>

                                 {dummyData.map((emp,index)=>{
                                     return(
                                         <View key={index}>
                                             {
                                                 emp.userType === 'Trainee'?
                                                     <View>
                                                         <Text style={{marginLeft:19,marginTop:11,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                             {emp.group}, Coordinator:{emp.grpCoordinator}
                                                         </Text>

                                                         <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                                             Dress Code: {emp.dressCode}
                                                         </Text>

                                                         <View style={{backgroundColor:'#ffffff',marginTop:12.5,marginLeft:9,marginRight:9, padding:8}}>
                                                             <Text style={{fontSize:12,fontFamily:'hilti-bold',color:'#000000'}}>
                                                                 {emp.agenda}
                                                             </Text>
                                                             <View style={{flexDirection:'row'}}>
                                                                 <Icon
                                                                     style={{marginTop:5}}
                                                                     name='clock'
                                                                     size={15}
                                                                     onPress={() => {}} />
                                                                 <Text style={{marginLeft:4.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000'}}>
                                                                     {emp.from} - {emp.to},
                                                                 </Text>
                                                                 <Text style={{marginLeft:3.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#888888'}}>
                                                                     9 Hr
                                                                 </Text>
                                                             </View>
                                                             <Text style={{marginTop:3.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                                                 Trainer:{emp.trainer}
                                                             </Text>
                                                             <Text style={{marginTop:3.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                                                 Location:{emp.location}
                                                             </Text>
                                                         </View>
                                                     </View>:
                                                     <View>
                                                         <Text style={{marginLeft:19,marginTop:11,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                             Coordinator:{emp.grpCoordinator}
                                                         </Text>

                                                         <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                                             Dress Code: {emp.dressCode}
                                                         </Text>

                                                         <View style={{backgroundColor:'#ffffff',marginTop:12.5,marginLeft:9,marginRight:9, padding:8}}>
                                                             <Text style={{fontSize:12,fontFamily:'hilti-bold',color:'#000000'}}>
                                                                 {emp.grpVisiting}
                                                             </Text>
                                                             <Text style={{marginTop:3.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                                                 Trainer:{emp.trainer}
                                                             </Text>
                                                             <Text style={{marginTop:3.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                                                 Location:{emp.location}
                                                             </Text>

                                                             <View style={{flexDirection:'row'}}>
                                                                 <Icon
                                                                     style={{marginTop:5}}
                                                                     name='clock'
                                                                     size={15}
                                                                     onPress={() => {}} />
                                                                 <Text style={{marginLeft:4.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000'}}>
                                                                     {emp.from} - {emp.to},
                                                                 </Text>
                                                                 <Text style={{marginLeft:3.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#888888'}}>
                                                                     9 Hr
                                                                 </Text>
                                                             </View>

                                                             <Text style={{marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>
                                                                 Participants : {emp.group}
                                                             </Text>
                                                         </View>
                                                     </View>
                                             }
                                         </View>
                                     )
                                 })}

                                 {/*<Text style={{marginLeft:19,marginTop:11,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                     MARKETING REACH TEAM
                                 </Text>
                                 <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                     Dress Code: Hilti red shirt+Coat/Blazer+Dark Trouser/Skirt
                                 </Text>

                                 <View style={{backgroundColor:'#ffffff',marginTop:12.5,marginLeft:9,marginRight:9, padding:8}}>
                                     <Text style={{fontSize:12,fontFamily:'hilti-bold',color:'#000000'}}>
                                         Trade Application Demo Session
                                     </Text>
                                     <Text style={{marginTop:3.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                         (Please refer your respective detailed agenda)
                                     </Text>

                                     <View style={{flexDirection:'row'}}>
                                         <Image
                                            style={{marginTop:5,width:10,opacity:0.6}}
                                            source={require('../../assets/images/watch_icon/watch_icon_hdpi.png')}
                                        />

                                         <Icon
                                             style={{marginTop:5}}
                                             name='clock'
                                             size={15}
                                             onPress={() => {}} />
                                         <Text style={{marginLeft:4.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000'}}>
                                             9:00 - 18:00,
                                         </Text>
                                         <Text style={{marginLeft:3.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#888888'}}>
                                             9 Hr
                                         </Text>
                                     </View>

                                     <Text style={{marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>
                                         Participants :
                                     </Text>
                                     <View style={{width:215.5,marginLeft:12,marginTop:5}}>
                                         <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                             Sales (Mainstream – N/C)
                                         </Text>
                                         <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                             Sales (Mainstream – W/S)
                                         </Text>
                                         <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                             Sales – E&I
                                         </Text>
                                         <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                             Key Accounts & Engineering
                                         </Text>
                                         <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                             E&I (Technical),
                                         </Text>
                                         <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                             Marketing – Trade, PLS & Strategic Marketing Team
                                         </Text>
                                     </View>
                                 </View>

                                 <View style={{backgroundColor:'#ffffff',marginTop:12.5,marginLeft:9,marginRight:9, padding:8}}>
                                     <Text style={{height:13,fontSize:12,fontFamily:'hilti-bold',color:'#000000'}}>
                                         Functional Meetings
                                     </Text>
                                     <Text style={{marginTop:3.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>
                                         (Please refer your respective detailed agenda)
                                     </Text>

                                     <Text style={{marginTop:7,width:262,fontSize:12,fontFamily:'hilti-roman',lineHeight:12,color:'#000000',opacity:0.8,}}>
                                         Finance, HR, Marketing-GCC, Operations, Professional Service, Supply Chain
                                     </Text>

                                     <View style={{flexDirection:'row'}}>
                                         <Image
                                            style={{marginTop:9,width:10,height:10,opacity:0.6}}
                                            source={require('../../assets/images/watch_icon/watch_icon_hdpi.png')}
                                        />

                                         <Icon
                                             style={{marginTop:9}}
                                             name='clock'
                                             size={15}
                                             onPress={() => {}} />
                                         <Text style={{marginTop:6.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000'}}>
                                             9:00 - 18:00,
                                         </Text>
                                         <Text style={{marginTop:6.5,fontSize:12,fontFamily:'hilti-roman',color:'#888888'}}>
                                             9 Hr
                                         </Text>
                                     </View>

                                     <Text style={{marginTop:9.5,fontSize:12,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>
                                         Participants :
                                     </Text>

                                     <Text style={{marginTop:3,fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6,lineHeight:15}}>
                                         All respective team members.
                                     </Text>
                                 </View>*/}
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
        backgroundColor:'#f5f3ee'
    },
    agendaMainImg: {
        flex:1,
        resizeMode:'stretch'
    }
})

export default AgendaDay;