import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image ,FlatList} from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons'
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'
import { Font } from 'expo'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAgendaData } from '../../actions/apiData';

const month=["Jan","Feb","March","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];

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

    componentDidMount(){
        const { getAgendaData } = this.props;
        let detail = JSON.parse(this.props.userDetail);
        let date = this.props.navigation.state.params.day;
        console.log('day is----->>>',date,detail.Jan09GroupA);
        let grpName;
        let groupName = 'ASM-TM Group 11'
        if(date === '8 Jan 18'){
            grpName = detail.Jan08GroupA;
            getAgendaData({param:grpName,day:date});
        }
        else if(date === '9 Jan 18'){
            grpName = detail.Jan09GroupA;
            console.log('grp 9 jan--',grpName);
            getAgendaData({param:grpName,day:date});
        }
        else{
            grpName = detail.Jan10GroupA;
            console.log('grp 10 jan--',grpName);
            getAgendaData({param:grpName,day:date});
        }

    }

    render(){
        console.log('this.props in agenda day----------->>>>>',this.props.agendaList);
        let date = this.props.navigation.state.params.day
        let day;
        if(date === '8 Jan 18'){
            day = 'Day 1'
        }
        else if(date === '9 Jan 18'){
            day = 'Day 2'
        }
        else{
            day = 'Day 3'
        }
        /*let traineeCommonData = {group:'ASM-TM Group 1', dressCode:'Smart casual, safety shoes',};
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
            /!*{
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
            },*!/
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
            /!*{
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
            }*!/
        ];*/
        console.log('***********',this.props.agendaList);
        let empAgenda = {
                header: {
                    Date: null,
                    ParticipantsGroups: null,
                    DressCode: null,
                    GroupCoordinator: null
                },
                body: []
            };

        if(this.props.agendaList && Object.keys(this.props.agendaList).length){
            empAgenda = this.props.agendaList;
            console.log('empagenda',empAgenda,'*********',this.props.agendaList);
        }
        console.log('empAgenda-------------',empAgenda);


        //console.log('empagenda',empAgenda,'*********',this.props.agendaList);
        let currentDateStr = date.split(' ');
        let currentDate = currentDateStr[0];
        let currentMonth = currentDateStr[1];
        let venueCount = 0,agendaItemCount = 0,presenterCount = 0, trainerCount = 0, grpVistingCount = 0;

        /*let agendaDetails = empAgenda.body.map((data) => {
            if(data && data.length){
                if(data.AgendaItem||data.Agendaitem){
                    agendaItemCount++;
                }
                if(data.Presenter){
                    presenterCount++;
                }
                if(data.Venue){
                    venueCount++;
                }
                if(data.Trainer){
                    trainerCount++;
                }
                if(data.GroupVisting){
                    grpVistingCount++;
                }
                if(agendaItemCount>0){
                    if(presenterCount>0){
                        return(
                            <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10}}>
                                <Text style={{flex:3.0,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.AgendaItem||item.Agendaitem}</Text>
                                <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Presenter||'-'}</Text>
                                {(venueCount > 0)?
                                    <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Venue||'-'}</Text>
                                    :null
                                }
                                <Text style={{flex:2.2,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Dur||'-'}</Text>
                                <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.From||'-'}</Text>
                                <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.To||'-'}</Text>
                            </View>
                        )
                    }
                    if(trainerCount>0){
                        return(
                            <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10}}>
                                <Text style={{flex:3.0,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.AgendaItem||item.Agendaitem}</Text>
                                <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Trainer||'-'}</Text>
                                {(venueCount > 0)?
                                    <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Venue||'-'}</Text>
                                    :null
                                }
                                <Text style={{flex:2.2,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Dur||'-'}</Text>
                                <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.From||'-'}</Text>
                                <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.To||'-'}</Text>
                            </View>
                        )
                    }
                }
                else{
                   return(
                        <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10}}>
                            <Text style={{flex:3.0,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.GroupVisiting}</Text>
                            <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.GroupLeaders||'-'}</Text>
                            {(venueCount > 0)?
                                <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Venue||'-'}</Text>
                                :null
                            }
                            <Text style={{flex:2.2,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Dur||'-'}</Text>
                            <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.From||'-'}</Text>
                            <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.To||'-'}</Text>
                        </View>
                    )
                }
            }
        });*/
        return(
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage={day} navigation={this.props.navigation}/>
                             <ScrollView>
                                 <View style={{height:179.5}}>
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
                                             fontSize:14,
                                             color:'#dd2127',
                                             fontFamily:'hilti-roman'}}>
                                         HILTI INDIA KICK OFF 2018</Text>

                                     {/*<Text
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
                                     </Text>*/}
                                     <View style={{position:'absolute',height:70,width:70,backgroundColor:'#dd2127',top:130.5,left:20,justifyContent:'center',alignItems:'center',zIndex:10}}>
                                         <Text style={{flex:2,fontSize:38.5,fontFamily:'hilti-roman',color:'#ffffff'}}>{currentDate}</Text>
                                         <Text style={{flex:1,fontSize:15,fontFamily:'hilti-roman',color:'#ffffff'}}>{currentMonth}</Text>
                                     </View>

                                 </View>

                                 <View style={{backgroundColor:'#ffffff',paddingLeft:100}}>
                                     {/*{(empAgenda.header && Object.keys(empAgenda.header).length)?
                                         ((empAgenda.header.ParticipantsGroups || empAgenda.header.DressCode || empAgenda.header.GroupCoordinator)?
                                         //true
                                                 ( (empAgenda.header.ParticipantsGroups?
                                                         <Text style={{marginTop:7,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                             Participants Groups: {empAgenda.header.ParticipantsGroups}
                                                         </Text>:
                                                         null)
                                                     (empAgenda.header.DressCode?
                                                             <Text style={{marginTop:7,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e',paddingBottom:7}}>
                                                                 Dress Code: {empAgenda.header.DressCode||''}
                                                             </Text>:
                                                             null
                                                     )
                                                     (empAgenda.header.GroupCoordinator?
                                                             <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#dd2127',paddingBottom:7}}>
                                                                 Group Coordinator: {empAgenda.header.GroupCoordinator}
                                                             </Text>:
                                                             null
                                                     )

                                                 )
                                            : <Text>Fields not provided</Text>

                                         ):
                                         <Text>No data available</Text>
                                     }*/}
                                     {(empAgenda.header.ParticipantsGroups||empAgenda.header.ParticipantsGroup)?
                                         <Text style={{marginTop:7,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                             Participants Groups: {empAgenda.header.ParticipantsGroups||empAgenda.header.ParticipantsGroup||'Data not available'}
                                         </Text>:
                                         null
                                     }

                                     {empAgenda.header.DressCode?
                                         <Text style={{marginTop:7,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e',paddingBottom:7}}>
                                             Dress Code: {empAgenda.header.DressCode||'Data not available'}
                                         </Text>:
                                         null
                                     }

                                     {(empAgenda.header.GroupCoordinator||empAgenda.header.Groupcoordinator)?
                                         <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#dd2127',paddingBottom:7}}>
                                             Group Coordinator: {empAgenda.header.GroupCoordinator||empAgenda.header.Groupcoordinator||'Data not available'}
                                         </Text>:
                                         null
                                     }

                                 </View>

                                 {empAgenda.body.map((empAgenda)=>{
                                     if(empAgenda.Venue){
                                         venueCount++;
                                     }
                                     if(empAgenda.Presenter){
                                         presenterCount++;
                                     }
                                 })}

                                 {(empAgenda.body && empAgenda.body.length)?
                                     ((empAgenda.body[0].AgendaItem || empAgenda.body[0].Agendaitem)?
                                             (
                                                 (presenterCount>0)?
                                                     <View>
                                                         <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:5,marginRight:5,marginTop:10}}>
                                                             <Text style={{flex:3.95,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Agenda</Text>
                                                             <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Presenter</Text>
                                                             {(venueCount > 0)?
                                                                 <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Venue</Text>
                                                                 :null
                                                             }
                                                             <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Dur</Text>
                                                             <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>From</Text>
                                                             <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>To</Text>
                                                         </View>

                                                         <FlatList
                                                             data={empAgenda.body}
                                                             keyExtractor = {(item,index) => index}
                                                             renderItem = {({item}) => (
                                                                 <View>
                                                                     <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:5,marginRight:5}}>
                                                                         <Text style={{flex:3.95,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.AgendaItem||item.Agendaitem}</Text>
                                                                         <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.Presenter||'-'}</Text>
                                                                         {(venueCount > 0)?
                                                                             <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.Venue||'-'}</Text>
                                                                             :null
                                                                         }
                                                                         <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.Dur||'-'}</Text>
                                                                         <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.From||'-'}</Text>
                                                                         <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.To||'-'}</Text>
                                                                     </View>
                                                                     {/*<View style={{height:0.5,backgroundColor:'green',marginLeft:10,marginRight:10}}/>*/}
                                                                 </View>
                                                             )}
                                                         >
                                                         </FlatList>
                                                     </View>
                                                     :<View>
                                                         <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:5,marginRight:5,marginTop:10}}>
                                                             <Text style={{flex:3.95,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Agenda</Text>
                                                             <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Trainer</Text>
                                                             {(venueCount > 0)?
                                                                 <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Venue</Text>
                                                                 :null
                                                             }
                                                             <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Dur</Text>
                                                             <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>From</Text>
                                                             <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>To</Text>
                                                         </View>

                                                         <FlatList
                                                             data={empAgenda.body}
                                                             keyExtractor = {(item,index) => index}
                                                             renderItem = {({item}) => (
                                                                 <View>
                                                                     <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:5,marginRight:5}}>
                                                                         <Text style={{flex:3.95,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.AgendaItem||item.Agendaitem}</Text>
                                                                         <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.Trainer||'-'}</Text>
                                                                         {(venueCount > 0)?
                                                                             <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.Venue||'-'}</Text>
                                                                             :null
                                                                         }
                                                                         <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.Dur||'-'}</Text>
                                                                         <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.From||'-'}</Text>
                                                                         <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.To||'-'}</Text>
                                                                     </View>
                                                                     {/*<View style={{height:0.5,backgroundColor:'green',marginLeft:10,marginRight:10}}/>*/}
                                                                 </View>
                                                             )}
                                                         >
                                                         </FlatList>
                                                     </View>
                                             )
                                             :<View>
                                                 <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:5,marginRight:5,marginTop:10}}>
                                                     <Text style={{flex:3.95,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Group Visiting</Text>
                                                     <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Group Leader</Text>
                                                     {(venueCount > 0)?
                                                         <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Venue</Text>
                                                         :null
                                                     }
                                                     <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Dur</Text>
                                                     <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>From</Text>
                                                     <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>To</Text>
                                                 </View>

                                                 <FlatList
                                                     data={empAgenda.body}
                                                     keyExtractor = {(item,index) => index}
                                                     renderItem = {({item}) => (
                                                         <View>
                                                             <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:5,marginRight:5}}>
                                                                 <Text style={{flex:3.95,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.GroupVisiting}</Text>
                                                                 <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.GroupLeaders||item.GroupLeader||'-'}</Text>
                                                                 {(venueCount > 0)?
                                                                     <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.Venue||'-'}</Text>
                                                                     :null
                                                                 }
                                                                 <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.Dur||'-'}</Text>
                                                                 <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.From||'-'}</Text>
                                                                 <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.To||'-'}</Text>
                                                             </View>
                                                             {/*<View style={{height:0.5,backgroundColor:'green',marginLeft:10,marginRight:10}}/>*/}
                                                         </View>
                                                     )}
                                                 >
                                                 </FlatList>
                                             </View>

                                     ):
                                     <View style={{justifyContent:'center',alignItems:'center'}}>
                                         <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#dd2127',padding:10}}>Data not available yet....</Text>
                                     </View>
                                 }
                                 {/*{(empAgenda.body && empAgenda.body.length && empAgenda.body[0].AgendaItem && empAgenda.body[0].Presenter)?
                                    <View>
                                        <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10,marginTop:15}}>
                                            <Text style={{flex:3.5,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>Agenda</Text>
                                            <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>Presenter</Text>
                                            {(venueCount > 0)?
                                                <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>Venue</Text>
                                                :null
                                            }
                                            <Text style={{flex:1.9,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>Duration</Text>
                                            <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>From</Text>
                                            <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>To</Text>
                                        </View>

                                        <FlatList
                                            data={empAgenda.body}
                                            keyExtractor = {(item,index) => index}
                                            renderItem = {({item}) => (
                                                <View>
                                                    <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10}}>
                                                        <Text style={{flex:3.5,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.AgendaItem}</Text>
                                                        <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Presenter||'-'}</Text>
                                                        {(venueCount > 0)?
                                                            <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Venue||'-'}</Text>
                                                            :null
                                                        }
                                                        <Text style={{flex:1.9,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Dur||'-'}</Text>
                                                        <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.From||'-'}</Text>
                                                        <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.To||'-'}</Text>
                                                    </View>
                                                    <View style={{height:0.5,backgroundColor:'green',marginLeft:10,marginRight:10}}/>
                                                </View>
                                            )}
                                        >
                                        </FlatList>
                                    </View>:
                                     <View>
                                         <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10,marginTop:15}}>
                                             <Text style={{flex:3.5,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>Group Visiting</Text>
                                             <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>Trainer</Text>
                                             {(venueCount > 0)?
                                                 <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>Venue</Text>
                                                 :null
                                             }
                                             <Text style={{flex:1.9,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>Duration</Text>
                                             <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>From</Text>
                                             <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-bold',fontSize:12}}>To</Text>
                                         </View>

                                         <FlatList
                                             data={empAgenda.body}
                                             keyExtractor = {(item,index) => index}
                                             renderItem = {({item}) => (
                                                 <View>
                                                     <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10}}>
                                                         <Text style={{flex:3.5,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.GroupVisiting}</Text>
                                                         <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Trainer||'-'}</Text>
                                                         {(venueCount > 0)?
                                                             <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Venue||'-'}</Text>
                                                             :null
                                                         }
                                                         <Text style={{flex:1.9,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.Dur||'-'}</Text>
                                                         <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.From||'-'}</Text>
                                                         <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'grey',fontFamily:'hilti-roman',fontSize:10}}>{item.To||'-'}</Text>
                                                     </View>
                                                     <View style={{height:0.5,backgroundColor:'green',marginLeft:10,marginRight:10}}/>
                                                 </View>
                                             )}
                                         >
                                         </FlatList>
                                     </View>
                                 }*/}


                                 {/*{
                                     empAgenda.isTrainer?
                                         <View>
                                             {empAgenda.Agenda && empAgenda.Agenda.map((emp,index)=> {
                                                 return(
                                                     <View style={{}} key={index}>

                                                         <View style={{backgroundColor:'#ffffff',marginTop:13,marginLeft:9,marginRight:9, padding:8}}>
                                                             <Text style={{fontSize:12,fontFamily:'hilti-bold',color:'#000000'}}>
                                                                 {emp.AgendaItemGroupVisiting}
                                                             </Text>
                                                             <View style={{flexDirection:'row'}}>
                                                                 <Icon
                                                                     style={{marginTop:5}}
                                                                     name='clock'
                                                                     size={15}
                                                                     onPress={() => {}} />
                                                                 <Text style={{marginLeft:4.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000'}}>
                                                                     {emp.From} - {emp.To},
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
                                                                     Location/Venue: {emp.LocationVenue}
                                                                 </Text>
                                                             </View>

                                                             <View style={{marginLeft:11.5,marginTop:12.5,marginRight:11.5}}>
                                                                 <Text style={{fontSize:11,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>PARTICIPATING GROUPS :</Text>
                                                                 <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>{emp.ParticipatingGroup}</Text>
                                                             </View>

                                                             <View style={{marginLeft:11.5,marginTop:12.5,marginRight:11.5}}>
                                                                 <Text style={{fontSize:11,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>TRAINER :</Text>
                                                                 <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>{emp.Trainer}</Text>
                                                             </View>
                                                         </View>
                                                     </View>
                                                 );
                                             })}
                                         </View>:
                                         <View>
                                             {empAgenda.Agenda && empAgenda.Agenda.map((emp,index)=> {
                                                 return(
                                                     <View style={{}} key={index}>

                                                         <View style={{backgroundColor:'#ffffff',marginTop:13,marginLeft:9,marginRight:9, padding:8}}>
                                                             <Text style={{fontSize:12,fontFamily:'hilti-bold',color:'#000000'}}>
                                                                 {emp.AgendaItemGroupVisiting}
                                                             </Text>
                                                             <View style={{flexDirection:'row'}}>
                                                                 <Icon
                                                                     style={{marginTop:5}}
                                                                     name='clock'
                                                                     size={15}
                                                                     onPress={() => {}} />
                                                                 <Text style={{marginLeft:4.5,marginTop:2.5,fontSize:12,fontFamily:'hilti-roman',color:'#000000'}}>
                                                                     {emp.From} - {emp.To},
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
                                                                     Location/Venue: {emp.LocationVenue}
                                                                 </Text>
                                                             </View>

                                                             <View style={{marginLeft:11.5,marginTop:12.5,marginRight:11.5}}>
                                                                 <Text style={{fontSize:11,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>GROUP COORDINATOR :</Text>
                                                                 <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>{emp.GroupCoordinator}</Text>
                                                             </View>

                                                             <View style={{marginLeft:11.5,marginTop:12.5,marginRight:11.5}}>
                                                                 <Text style={{fontSize:11,fontFamily:'hilti-bold',color:'#000000',opacity:0.8,letterSpacing:0.7}}>TRAINER :</Text>
                                                                 <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#000000',opacity:0.6}}>{emp.Trainer}</Text>
                                                             </View>
                                                         </View>
                                                     </View>
                                                 );
                                             })}
                                         </View>
                                 }*/}
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

function mapStateToProps (state) {
    return {
        agendaList: state.event.agendaList,
        eventLoginList: state.event.eventLoginList,
        userDetail:state.event.userDetail,
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getAgendaData
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgendaDay)