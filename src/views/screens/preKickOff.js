import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image , TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons'
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'
import { Font } from 'expo'
import RadioButton from 'radio-button-react-native';

class PreKickOff extends Component{
    constructor(){
        super();

        this.state = {
            fontLoaded:false,
            selectedDate:'6 Jan'
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

    handleOnPress = (value) => {
        this.setState({
            selectedDate: value
        })
    }

    render(){
        let traineeCommonData = {group:'ASM-TM Group 1', dressCode:'Smart casual, safety shoes',};
        let trainerCommonData = {group:'TAC-1', dressCode:'Smart casual, safety shoes',}
        let dummyData = [
            {
                userType:'Trainee',
                agenda:'Infra strategy launch',
                grpCoordinator:'Mohit Kumar',
                trainer:'Mohit Vasistha',
                location:'classroom 1',
                from:'13:30',
                to:'14:13'
            },
            /*{
                userType:'Trainee',
                agenda:'Infra strategy launch',
                grpCoordinator:'Mohit Kumar',
                trainer:'Mohit Vasistha',
                location:'classroom 1',
                from:'13:30',
                to:'14:13'
            },
            {
                userType:'Trainee',
                agenda:'Infra strategy launch',
                grpCoordinator:'Mohit Kumar',
                trainer:'Mohit Vasistha',
                location:'classroom 1',
                from:'13:30',
                to:'14:13'
            },*/
            {
                userType:'Trainer',
                participatingGrps:'ASM 1,ASM 2,ASM 3',
                grpVisiting:'Infra strategy launch',
                grpCoordinator:'Mohit Kumar',
                trainer:'Ashish Markande/Ashish Mittal',
                location:'classroom 1',
                from:'13:30',
                to:'14:13'
            },
            /*{
                userType:'Trainer',
                participatingGrps:'ASM 1,ASM 2,ASM 3',
                grpVisiting:'Infra strategy launch',
                grpCoordinator:'Mohit Kumar',
                trainer:'Ashish Markande/Ashish Mittal',
                location:'classroom 1',
                from:'13:30',
                to:'14:13'
            },
            {
                userType:'Trainer',
                participatingGrps:'ASM 1,ASM 2,ASM 3',
                grpVisiting:'Infra strategy launch',
                grpCoordinator:'Mohit Kumar',
                trainer:'Ashish Markande/Ashish Mittal',
                location:'classroom 1',
                from:'13:30',
                to:'14:13'
            }*/
        ]
        return(
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage='Pre Kick-Off' navigation={this.props.navigation}/>
                            <ScrollView>
                                <View style={{height:249.5}}>
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
                                    <View style={{position:'absolute',height:70,width:70,backgroundColor:'#dd2127',top:140.5,left:20,justifyContent:'center',alignItems:'center',zIndex:1}}>
                                        <Text style={{flex:2,fontSize:38.5,fontFamily:'hilti-roman',color:'#ffffff'}}>6-7</Text>
                                        <Text style={{flex:1,fontSize:15,fontFamily:'hilti-roman',color:'#ffffff'}}>Jan</Text>
                                    </View>

                                    <View style={{height:50,backgroundColor:'#ffffff',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <TouchableOpacity style={{padding:10,margin:5}}>
                                            <RadioButton
                                                currentValue={this.state.selectedDate}
                                                value={'6 Jan'}
                                                outerCircleSize={15}
                                                innerCircleSize={7.5}
                                                innerCircleColor={'#dd2127'}
                                                onPress={this.handleOnPress.bind(this)}
                                            >
                                                <Text style={{marginLeft:4,fontSize:14,color:'#dd2127',fontFamily:'hilti-bold'}}>6 Jan</Text>
                                            </RadioButton>
                                            {/*<Text style={{fontSize:14, color:'#dd2127', fontFamily:'hilti-bold'}}>
                                                6 Jan
                                            </Text>*/}
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{padding:10,margin:5}}>
                                            <RadioButton
                                                currentValue={this.state.selectedDate}
                                                value={'7 Jan'}
                                                outerCircleSize={15}
                                                innerCircleSize={7.5}
                                                innerCircleColor={'#dd2127'}
                                                onPress={this.handleOnPress.bind(this)}
                                            >
                                                <Text style={{marginLeft:4,fontSize:14,color:'#dd2127',fontFamily:'hilti-bold'}}>7 Jan</Text>
                                            </RadioButton>
                                            {/*<Text style={{fontSize:14, color:'#dd2127', fontFamily:'hilti-bold'}}>
                                                7 Jan
                                            </Text>*/}
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={{marginTop:20}}>
                                    <Text style={{marginLeft:19,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                        {trainerCommonData.group}
                                    </Text>

                                    <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                        Dress Code: {trainerCommonData.dressCode}
                                    </Text>
                                </View>

                                {dummyData.map((emp,index)=>{
                                    return(
                                        <View key={index}>
                                            {
                                                emp.userType === 'Trainee'?
                                                    <View style={{}}>
                                                        {/*<Text style={{marginLeft:19,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                            {traineeCommonData.group}
                                                        </Text>

                                                        <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                                            Dress Code: {traineeCommonData.dressCode}
                                                        </Text>*/}

                                                        <View style={{backgroundColor:'#ffffff',marginTop:13,marginLeft:9,marginRight:9, padding:8}}>
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
                                                            <View style={{flexDirection:'row'}}>
                                                                <Icon
                                                                    style={{marginTop:5}}
                                                                    name='location'
                                                                    size={15}
                                                                    onPress={() => {}} />
                                                                <Text style={{marginLeft:4.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000'}}>
                                                                    Location/Venue: {emp.location}
                                                                </Text>
                                                            </View>

                                                            <View style={{marginLeft:11.5,marginTop:12.5,marginRight:11.5}}>
                                                                <Text style={{fontSize:11,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>GROUP COORDINATOR :</Text>
                                                                <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>{emp.grpCoordinator}</Text>
                                                            </View>

                                                            <View style={{marginLeft:11.5,marginTop:12.5,marginRight:11.5}}>
                                                                <Text style={{fontSize:11,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>TRAINER :</Text>
                                                                <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>{emp.trainer}</Text>
                                                            </View>
                                                        </View>
                                                    </View>:
                                                    <View style={{}}>
                                                        {/*<Text style={{marginLeft:19,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                            {emp.group}
                                                        </Text>

                                                        <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                                            Dress Code: {emp.dressCode}
                                                        </Text>*/}

                                                        <View style={{backgroundColor:'#ffffff',marginTop:13,marginLeft:9,marginRight:9, padding:8}}>
                                                            <Text style={{fontSize:12,fontFamily:'hilti-bold',color:'#000000'}}>
                                                                {emp.grpVisiting}
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
                                                            <View style={{flexDirection:'row'}}>
                                                                <Icon
                                                                    style={{marginTop:5}}
                                                                    name='location'
                                                                    size={15}
                                                                    onPress={() => {}} />
                                                                <Text style={{marginLeft:4.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000'}}>
                                                                    Location/Venue: {emp.location}
                                                                </Text>
                                                            </View>

                                                            <View style={{marginLeft:11.5,marginTop:12.5,marginRight:11.5}}>
                                                                <Text style={{fontSize:11,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>PARTICIPATING GROUPS :</Text>
                                                                <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>{emp.participatingGrps}</Text>
                                                            </View>

                                                            <View style={{marginLeft:11.5,marginTop:12.5,marginRight:11.5}}>
                                                                <Text style={{fontSize:11,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>TRAINER :</Text>
                                                                <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>{emp.trainer}</Text>
                                                            </View>
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

export default PreKickOff;