import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon  from 'react-native-vector-icons/FontAwesome'
import MaterialComIcon  from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon  from 'react-native-vector-icons/Feather'

import PageHeaderNotif from '../common/pageHeaderNotif'
import { Font } from 'expo'
import BackTravel from './backTravel'
import { getArrivals } from '../../actions/apiData';

class MyArrivals extends Component {
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
        const { getArrivals } = this.props;
        getArrivals();
    }

    render(){
        console.log("this.props in my_arrival",this.props.arrivalList);
        let details={...this.props.arrivalList[0]};
        console.log("details:",details);
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage='MY ARRIVAL'/>
                        <ScrollView>
                            <View
                                style={{height:39.5,
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    paddingLeft:17,
                                    paddingRight:6,
                                }}>
                                <View
                                    style={{flex:1,
                                        flexDirection:'row',
                                    }}>
                                    <MaterialComIcon
                                        style={{color:'#dd2127'}}
                                        name='airplane-landing'
                                        size={20}
                                    />
                                    <Text style={{marginLeft:7,marginTop:1,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>ARRIVAL DETAILS</Text>
                                </View>
                                <TouchableOpacity
                                    style={{flex:1,
                                        flexDirection:'row',
                                        justifyContent:'flex-end'
                                    }}

                                    onPress={() => {}}
                                >
                                    <FeatherIcon
                                        style={{color:'#dd2127'}}
                                        name='download'
                                        size={17}
                                    />
                                    <Text style={{marginLeft:5,fontSize:11,fontFamily:'hilti-roman',color:'#dd2127'}}>TICKET DOWNLOAD</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{height:332.5,backgroundColor:'#ffffff'}}>
                                <View
                                    style={{height:64.5,
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                        paddingLeft:40,
                                        paddingRight:17,
                                    }}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>From</Text>
                                        <Text style={{fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.From||'N/A'}</Text>
                                    </View>
                                    <FeatherIcon
                                        style={{flex:0.5,color:'#000000',opacity:0.8}}
                                        name='arrow-right'
                                        size={20}
                                    />
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>To</Text>
                                        <Text style={{fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.To||'N/A'}</Text>
                                    </View>
                                </View>
                                <View style={{height:0.5,backgroundColor:'#000000',marginLeft:35,marginRight:35}}/>
                                <View style={{height:67,
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                        paddingLeft:40,
                                        paddingRight:17,
                                    }}>
                                    <View style={{flex:1.5}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Flight/Train No.</Text>
                                        <Text style={{width:100,fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.FlightTrainNumber||'N/A'}</Text></View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>PNR No.</Text>
                                        <Text style={{fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.PNRNo||'N/A'}</Text>
                                    </View>
                                </View>
                                <View style={{height:0.5,backgroundColor:'#000000',marginLeft:35,marginRight:35}}/>
                                <View style={{height:69,
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    paddingLeft:40,
                                    paddingRight:17,
                                }}>
                                    <View style={{flex:1.5}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Dep Date & Time</Text>
                                        <Text style={{width:80,fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{`${details.DepartureDate} ${details.DepartureTime}`||'N/A'}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Arrival Date & Time</Text>
                                        <Text style={{width:80,fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{`${details.ArrivalDate} ${details.ArrivalTime}`||'N/A'}</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height:35,
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                        paddingLeft:40,
                                        paddingRight:17,
                                        paddingBottom:20
                                    }}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Arrival Terminal</Text>
                                        <Text style={{fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.ArrivalAtTerminalStation||'N/A'}</Text>
                                    </View>
                                </View>
                                <View style={{height:0.5,backgroundColor:'#000000',marginLeft:35,marginRight:35}}/>
                                <View style={{height:67,
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    paddingLeft:40,
                                    paddingRight:17,
                                }}>
                                    <View style={{flex:1.5}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>My Champion Name</Text>
                                        <Text style={{width:100,fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.MyTravelChampionName||'N/A'}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Champion No.</Text>
                                        <Text style={{fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.MyTravelChampionContactNumber||'N/A'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{height:40.5,
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    paddingLeft:17,
                                    paddingRight:6,
                                }}>
                                <View
                                    style={{flex:1,
                                        flexDirection:'row',
                                    }}>
                                    <Icon
                                        style={{color:'#dd2127'}}
                                        name='exchange'
                                        size={17}
                                    />
                                    <Text style={{marginLeft:7,fontSize:11,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                        TRANSFER FROM AIRPORT/STATION TO HOTEL DETAILS
                                    </Text>
                                </View>
                            </View>
                            <View style={{height:235.5,backgroundColor:'#ffffff'}}>
                                <View style={{height:67,
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    paddingLeft:40,
                                    paddingRight:17,
                                }}>
                                    <View style={{flex:1.5}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Pickup Point</Text>
                                        <Text style={{width:100,fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.PickUpPoint||'N/A'}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Cab/Coach No.</Text>
                                        <Text style={{fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.CoachCabNo||'N/A'}</Text>
                                    </View>
                                </View>
                                <View style={{height:0.5,backgroundColor:'#000000',marginLeft:35,marginRight:35}}/>
                                <View style={{height:67,
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    paddingLeft:40,
                                    paddingRight:17,
                                }}>
                                    <View style={{flex:1.5}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>My Champion Name</Text>
                                        <Text style={{width:100,fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.MyTravelChampionName||'N/A'}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Champion No.</Text>
                                        <Text style={{fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>{details.MyTravelChampionContactNumber||'N/A'}</Text>
                                    </View>
                                </View>
                                <View style={{height:0.5,backgroundColor:'#000000',marginLeft:35,marginRight:35}}/>
                                <View style={{height:67,
                                    alignItems:'center',
                                    paddingTop:18,
                                    paddingLeft:40,
                                    paddingRight:40,
                                }}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000',opacity:0.8}}>Bus/Cab Departure Time</Text>
                                        <Text style={{width:100,fontFamily:'hilti-bold',fontSize:12,color:'#000000'}}>2:00 hr</Text>
                                        <Text style={{marginTop:10.5,fontSize:9,fontFamily:'hilti-roman',color:'#000000',opacity:0.8}}>
                                            (The time is indicative and may change as per the arrival schedule of flight)
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>:null
                }

                {/*<ScrollView>
                    <View style={styles.bodyContainer}>
                    <View style={styles.header}>
                        <Text style={styles.text}>Arrival Details</Text>
                        <Text style={styles.text}>Ticket download</Text>
                    </View>
                    <View style={styles.detailParent}>
                        <View style={styles.detail}>
                            <View>
                                <Text style={styles.heading}>From</Text>
                                <Text>{details.From||'N/A'}</Text>
                            </View>
                            <Icon
                                style={styles.icon}
                                name='arrow-right'
                                size={10}
                            />
                            <View>
                                <Text style={styles.heading}>To</Text>
                                <Text>{details.To||'N/A'}</Text>
                            </View>
                        </View>
                        <View style={styles.detail}>
                            <View>
                                <Text style={styles.heading}>Flight/Train No.</Text>
                                <Text>{details.FlightTrainNumber||'N/A'}</Text>
                            </View>
                            <View>
                                <Text style={styles.heading}>PNR No.</Text>
                                <Text>{details.PNRNo||'N/A'}</Text>
                            </View>
                        </View>
                        <View style={styles.detail}>
                            <View>
                                <Text style={styles.heading}>Dep Date & Time</Text>
                                <Text>{details.DepartureDate||'N/A'}</Text>
                                <Text>{details.DepartureTime||'N/A'}</Text>
                            </View>
                            <View>
                                <Text style={styles.heading}>Arrival Date & Time</Text>
                                <Text>{details.ArrivalDate||'N/A'}</Text>
                                <Text>{details.ArrivalTime||'N/A'}</Text>
                            </View>
                        </View>
                        <View style={styles.detail}>
                            <View>
                                <Text style={styles.heading}>Arrival Terminal</Text>
                                <Text>{details.ArrivalAtTerminalStation||'N/A'}</Text>
                            </View>
                        </View>
                        <View style={[styles.detail, styles.noBorder]}>
                            <View>
                                <Text style={styles.heading}>My Champion Name</Text>
                                <Text>{details.MyTravelChampionName||'N/A'}</Text>
                            </View>
                            <View>
                                <Text style={styles.heading}>Champion No.</Text>
                                <Text>{details.MyTravelChampionContactNumber||'N/A'}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.text}>My Transfer Details</Text>
                        <Text style={styles.text}>Ticket download</Text>
                    </View>
                    <View style={styles.detailParent}>
                        <View style={[styles.detail, styles.noBorder]}>
                            <View>
                                <Text style={styles.heading}>Pickup Point</Text>
                                <Text>{details.PickUpPoint||'N/A'}</Text>
                            </View>
                            <View>
                                <Text style={styles.heading}>Cab/Coach No.</Text>
                                <Text>{details.CoachCabNo||'N/A'}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.text}>My Champion Details</Text>
                        <Text style={styles.text}>Ticket download</Text>
                    </View>
                    <View style={styles.detailParent}>
                        <View style={[styles.detail, styles.noBorder]}>
                            <View>
                                <Text style={styles.heading}>Name</Text>
                                <Text>{details.MyTravelChampionName||'N/A'}</Text>
                            </View>
                            <View>
                                <Text style={styles.heading}>Mobile No.</Text>
                                <Text>{details.MyTravelChampionContactNumber||'N/A'}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.text}>Bus/Cab Departure Time Details</Text>
                        <Text style={styles.text}>Ticket download</Text>
                    </View>

                </View>
                </ScrollView>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1,
        backgroundColor:'#f5f3ee'
    },
    bodyContainer:{
        flex:1,
    },
    header:{
        backgroundColor:'#F5F3EE',
        height:30,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        alignItems:'center'
    },
    text:{
        color:'red'
    },
    detail:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5,
        marginBottom:5,
        paddingBottom:7,
        borderBottomColor:'#F5F3EE',
        borderBottomWidth:2
    },
    noBorder:{
      borderBottomWidth:0
    },
    heading:{
        color:'lightgrey'
    },
    icon:{
        marginTop:10
    },
    detailParent:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15
    }
});

function mapStateToProps (state) {
    return {
        arrivalList: state.event.arrivalList
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getArrivals,
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyArrivals)