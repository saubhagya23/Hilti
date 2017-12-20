import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Linking } from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons'
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'
import { Font } from 'expo'
import getDirections from 'react-native-google-maps-directions'

class VenueLayout extends Component{
    constructor(){
        super();

        this.state = {
            fontLoaded:false
        }
    }
    handleGetDirections = () => {
        const data = {
          destination: {
            latitude: 28.6621,
            longitude: 77.3021
          },
          params: [
            {
              key: "dirflg",
              value: "d"
            }
          ]
        }
     
        getDirections(data)
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
                        <PageHeaderNotif props={this.props} parentPage='VENUE LAYOUT' navigation={this.props.navigation}/>
                        <Image
                            style={{height:249.5}}
                            source={require('../../assets/images/venueRoadMap/venue_road_map_mdpi.png')}
                        />
                        <TouchableHighlight style={{marginLeft:97,marginTop:23,height:28.5,width:194.5,borderWidth:1,borderColor:'#dd2127',alignItems:'center',justifyContent:'center'}} onPress= { () => {this.handleGetDirections()}}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    style={{width:9.5,height:13}}
                                    source={require('../../assets/images/map_icon/map_icon_hdpi.png')}
                                />
                                <Text style={{marginLeft:9.5,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                    FIND ON GOOGLE MAP
                                </Text>
                            </View>
                        </TouchableHighlight>
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

export default VenueLayout;