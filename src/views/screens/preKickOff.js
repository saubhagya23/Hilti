import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image , TouchableOpacity, FlatList} from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons'
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'
import { Font } from 'expo'
import RadioButton from 'radio-button-react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAgendaData } from '../../actions/apiData';

class PreKickOff extends Component{
    constructor(){
        super();

        this.state = {
            fontLoaded:false,
            selectedDate:'6 Jan 18'
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

    componentDidMount() {
        //get api call for 6 Jan.
        const { getAgendaData } = this.props;
        let detail = JSON.parse(this.props.userDetail);
        let grpName = detail.Jan06GroupA;
        //let day = this.props.navigation.state.params.day;
        console.log('day is----->>>',detail);
        let groupName = 'ASM-TM Group 11'
        getAgendaData({param:grpName,day:'6 Jan 18'});
    }

    handleOnPress = (value) => {
        this.setState({
            selectedDate: value
        },()=> {
            //if Jan 6 selected then api call for Jan 6 else Jan 7.
            if(this.state.selectedDate === '6 Jan 18'){
                // 6 jan api call
                const { getAgendaData } = this.props;
                let detail = JSON.parse(this.props.userDetail);
                let day = this.props.navigation.state.params.day;
                // console.log('day is----->>>',day,detail);
                let groupName = detail.Jan06GroupA;
                getAgendaData({param:groupName,day:'6 Jan 18'});
            }
            else{
                // 7 Jan api call
                const { getAgendaData } = this.props;
                let detail = JSON.parse(this.props.userDetail);
                let day = this.props.navigation.state.params.day;
                // console.log('day is----->>>',day,detail);
                let groupName = detail.Jan07GroupA;
                getAgendaData({param:groupName,day:'7 Jan 18'});
            }
        })
    }

    render(){
        /*let empAgenda = this.props.agendaList;
        console.log('prekickoff data---->>>',empAgenda);*/
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
            console.log('prekickoff data---->>>',empAgenda,'*********',this.props.agendaList);
        }
        console.log('empAgenda-------------',empAgenda);
        let venueCount = 0,presenterCount=0;


        /*dummy data*/

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
            {
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
                                <View style={{height:289.5}}>
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
                                    <View style={{position:'absolute',height:70,width:70,backgroundColor:'#dd2127',top:165.5,left:15,justifyContent:'center',alignItems:'center',zIndex:1}}>
                                        <Text style={{flex:2,fontSize:38.5,fontFamily:'hilti-roman',color:'#ffffff'}}>6-7</Text>
                                        <Text style={{flex:1,fontSize:15,fontFamily:'hilti-roman',color:'#ffffff'}}>Jan</Text>
                                    </View>

                                    <View style={{height:90,backgroundColor:'#ffffff'}}>
                                        <View style={{flex:3,marginLeft:100,justifyContent:'center',alignItems:'flex-start'}}>
                                            {empAgenda.header.ParticipantsGroups?
                                                <Text style={{marginTop:7,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                    Participants Groups: {empAgenda.header.ParticipantsGroups||'Data not available'}
                                                </Text>:
                                                null
                                            }

                                            {empAgenda.header.DressCode?
                                                <Text style={{marginTop:7,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e',paddingBottom:7}}>
                                                    Dress Code: {empAgenda.header.DressCode||'Data not available'}
                                                </Text>:
                                                null
                                            }

                                            {empAgenda.header.GroupCoordinator?
                                                <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#dd2127',paddingBottom:7}}>
                                                    Group Coordinator: {empAgenda.header.GroupCoordinator||'Data not available'}
                                                </Text>:
                                                null
                                            }
                                            {/*<Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#dd2127',marginTop:7}}>
                                                {trainerCommonData.group}
                                            </Text>

                                            <Text style={{marginTop:7,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                                Dress Code: {trainerCommonData.dressCode},
                                            </Text>*/}
                                        </View>
                                        <View style={{flex:2,backgroundColor:'#ffffff',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <TouchableOpacity style={{paddingRight:10,paddingTop:10,paddingBottom:10,marginRight:5,marginTop:5,marginBottom:5}}>
                                                <RadioButton
                                                    currentValue={this.state.selectedDate}
                                                    value={'6 Jan 18'}
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
                                                    value={'7 Jan 18'}
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
                                                            <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Duration</Text>
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
                                                    <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Group Leaders</Text>
                                                    {(venueCount > 0)?
                                                        <Text style={{flex:1.7,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Venue</Text>
                                                        :null
                                                    }
                                                    <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-bold',fontSize:12}}>Duration</Text>
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
                                                                <Text style={{flex:2.5,padding:5,borderWidth:1,borderColor:'lightgrey',fontFamily:'hilti-roman',fontSize:10}}>{item.GroupLeaders||'-'}</Text>
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
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#dd2127',padding:10}}>Data not updated yet....</Text>
                                    </View>
                                }

                                {/*<View style={{marginTop:20}}>
                                    <Text style={{marginLeft:19,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                        {trainerCommonData.group}
                                    </Text>

                                    <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                        Dress Code: {trainerCommonData.dressCode}
                                    </Text>
                                </View>*/}

                                {/*<View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10,marginTop:15}}>
                                    <Text style={{flex:3.5,padding:5,borderWidth:1,borderColor:'#000000'}}>Agenda</Text>
                                    <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'#000000'}}>Presenter</Text>
                                    <Text style={{flex:1.9,padding:5,borderWidth:1,borderColor:'#000000'}}>Duration</Text>
                                    <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'#000000'}}>From</Text>
                                    <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'#000000'}}>To</Text>
                                </View>

                                <FlatList
                                    data={dummyData}
                                    keyExtractor = {(item,index) => index}
                                    renderItem = {({item}) => (
                                        <View>
                                            <View style={{backgroundColor:'#ffffff',flexDirection:'row',marginLeft:10,marginRight:10}}>
                                                <Text style={{flex:3.5,padding:5,borderWidth:1,borderColor:'#000000'}}>{item.agenda}</Text>
                                                <Text style={{flex:2.1,padding:5,borderWidth:1,borderColor:'#000000'}}>{item.trainer}</Text>
                                                <Text style={{flex:1.9,padding:5,borderWidth:1,borderColor:'#000000'}}>9 Hrs</Text>
                                                <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'#000000'}}>{item.from}</Text>
                                                <Text style={{flex:1.25,padding:5,borderWidth:1,borderColor:'#000000'}}>{item.to}</Text>
                                            </View>
                                            <View style={{height:0.5,backgroundColor:'green',marginLeft:10,marginRight:10}}/>
                                        </View>
                                    )}
                                >
                                </FlatList>*/}
                                {/*<View style={{height:0.5,backgroundColor:'green',marginLeft:10,marginRight:10}}/>*/}

                                {/*{dummyData.map((emp,index)=>{
                                    return(
                                        <View key={index}>
                                            {
                                                emp.userType === 'Trainee'?
                                                    <View style={{}}>
                                                        <Text style={{marginLeft:19,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                            {traineeCommonData.group}
                                                        </Text>

                                                        <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                                            Dress Code: {traineeCommonData.dressCode}
                                                        </Text>

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
                                                        <Text style={{marginLeft:19,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                                            {emp.group}
                                                        </Text>

                                                        <Text style={{marginLeft:19,marginTop:8.5,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                                            Dress Code: {emp.dressCode}
                                                        </Text>

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
                                })}*/}

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

export default connect(mapStateToProps, mapDispatchToProps)(PreKickOff)