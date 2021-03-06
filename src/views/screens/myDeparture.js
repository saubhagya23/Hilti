import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon  from 'react-native-vector-icons/FontAwesome'

import PageHeader from '../common/pageHeader'
import BackTravel from './backTravel'
import { getArrivals } from '../../actions/apiData';

class MyDeparture extends Component {

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

          <View style={{flex:0.2}}>
              <PageHeader/>
              <BackTravel props={this.props} text={"My Arrival"}/>
          </View>
          <ScrollView>
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
                      <View style={styles.detail}>
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
                      <View style={styles.detail}>
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
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    backgroundColor:'white'
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

export default connect(mapStateToProps, mapDispatchToProps)(MyDeparture)