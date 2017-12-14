import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
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
        let day = this.props.navigation.state.params.day;
        // console.log('day is----->>>',day,detail);
        let groupName = 'ASM-TM Group 11'
        getAgendaData({param:groupName,day:day});
    }

    render(){
        console.log('this.props in agenda day----------->>>>>',this.props.agendaList);
        let day = this.props.navigation.state.params.day;
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
        let empAgenda = this.props.agendaList;
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
                                     <View style={{position:'absolute',height:70,width:70,backgroundColor:'#dd2127',top:130.5,left:20,justifyContent:'center',alignItems:'center'}}>
                                         <Text style={{flex:2,fontSize:38.5,fontFamily:'hilti-roman',color:'#ffffff'}}>28</Text>
                                         <Text style={{flex:1,fontSize:15,fontFamily:'hilti-roman',color:'#ffffff'}}>Jan</Text>
                                     </View>

                                 </View>

                                 <View style={{marginTop:30}}>
                                     <Text style={{marginLeft:19,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                         {empAgenda.GroupName}
                                     </Text>

                                     <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                         Dress Code: {empAgenda.DressCode}
                                     </Text>
                                 </View>

                                 {
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
                                 }
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