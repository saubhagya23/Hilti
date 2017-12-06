import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon  from 'react-native-vector-icons/FontAwesome'
import PageHeaderNotif from '../common/pageHeaderNotif'
import { Font } from 'expo'
import DetailContainer from '../common/detailContainer'
import { getStay } from '../../actions/apiData';

class MyStay extends Component {
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
        const { getStay } = this.props;
        console.log("props in mystay:",this.props.eventLoginList);
        getStay({param:88210});
    }

    render(){
        let details={...this.props.stayList};
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage='MY STAY'/>
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
                                    <Icon
                                        style={{color:'#dd2127'}}
                                        name='building'
                                        size={20}
                                    />
                                    <Text style={{marginLeft:7,marginTop:1,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>STAY DETAILS</Text>
                                </View>
                            </View>

                            <View style={{backgroundColor:'#ffffff'}}>

                                <DetailContainer leftHeading={'Check in Date & Time'} rightHeading={'Check out Date & Time'} leftData={details.Checkin||'N/A'} rightData={details.Checkout||'N/A'} />

                                <View style={{height:0.5,backgroundColor:'#000000',marginLeft:35,marginRight:35}}/>

                                <DetailContainer leftHeading={'Room Partner'} rightHeading={'Room No.'} leftData={details.RoomPartner||'N/A'} rightData={'Will be allocated at time of check-in'} />

                                <View style={{height:0.5,backgroundColor:'#000000',marginLeft:35,marginRight:35}}/>

                                <Text style={{fontFamily:'hilti-roman',fontSize:12,color:'#dd2127',marginLeft:48,marginTop:21.5}}>Inclusions</Text>

                                <View >
                                    {
                                        details && details.Inclusions ?
                                            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                                {
                                                    details.Inclusions.map((data,index)=>(
                                                        <View style={{width:100, height:40, marginTop:10,marginLeft:50.5,flexDirection:'row'}} key={index}>
                                                            <Icon
                                                             name="circle"
                                                             style={{color:'#dd2127'}}
                                                            />
                                                            <Text style={{fontFamily:'hilti-bold',fontSize:10,color:'#000000',marginLeft:4}}>{data}</Text>
                                                        </View>
                                                    ))
                                                 }
                                            </View>
                                            :<Text>N/A</Text>
                                    }
                                </View>

                                <Text style={{fontFamily:'hilti-roman',fontSize:12,color:'#dd2127',marginLeft:48,marginTop:21.5}}>Important to Remember</Text>

                                <View >
                                    {
                                        details && details.ImportantToRemember ?
                                            <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:15}}>
                                                {
                                                    details.ImportantToRemember.map((data,index)=>(
                                                        <View style={{width:100, height:40, marginTop:10,marginLeft:50.5,flexDirection:'row'}} key={index}>
                                                            <Icon
                                                                name="circle"
                                                                style={{color:'#dd2127'}}
                                                            />
                                                            <Text style={{fontFamily:'hilti-bold',fontSize:10,color:'#000000',marginLeft:4}}>{data}</Text>
                                                        </View>
                                                    ))
                                                }
                                            </View>
                                            :<Text>N/A</Text>
                                    }
                                </View>
                            </View>
                        </ScrollView>
                    </View>:null
                }
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
        stayList: state.event.stayList,
        eventLoginList:state.event.eventLoginList
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getStay,
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStay)