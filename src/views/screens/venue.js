import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Linking } from 'react-native';
//import Icon  from 'react-native-vector-icons/EvilIcons'
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'
import { Font } from 'expo'
import Icon  from 'react-native-vector-icons/MaterialIcons'

class Venue extends Component {
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

    openExternalApp(url) {
        console.log('url is-----',url);
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + url);
            }
        });
    }

    findViaGMap = () => {
        var url = 'geo:' + '28.6621,77.3021';
        this.openExternalApp(url);
    }

    render(){
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage='VENUE' navigation={this.props.navigation}/>

                        <View style={{height:184.5}}>
                            <Image
                                style={{flex:1,position:'relative'}}
                                source={require('../../assets/images/venueMainImg/banner_img_mdpi.png')}
                            />

                            {/*<Image
                                style={{position:'absolute',marginTop:22,marginLeft:19.5,width:63.5,height:15.5}}
                                source={require('../../assets/images/logo/logo_mdpi.png')}
                            />*/}

                            <Text style={{position:'absolute',marginLeft:19,marginTop:32,width:148,height:48.5,fontSize:14,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                THE LEELA AMBIENCE CONVENTION HOTEL, EAST DELHI
                            </Text>
                        </View>

                        <Text style={{marginLeft:18.5,marginTop:14,width:235,height:41,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>
                            CBD Maharaj Surajmal Road, Near Yamuna Sports Complex, Delhi 110 032
                            T: 011 71721234
                        </Text>

                        <Text style={{marginLeft:18.5,marginTop:15,fontSize:10,fontFamily:'hilti-bold',color:'#000000'}}>
                            From Airport: 25 kms/ 1 hr to 1.5 hrs
                        </Text>

                        <Text style={{marginLeft:18.5,marginTop:8.5,fontSize:10,fontFamily:'hilti-bold',color:'#000000'}}>
                            From Delhi Railway Station: 8 kms/ 20-30 min
                        </Text>

                        <TouchableHighlight style={{marginLeft:87,marginTop:33.5,height:28.5,width:194.5,borderWidth:1,borderColor:'#dd2127',alignItems:'center',justifyContent:'center'}} onPress= { () => {this.findViaGMap()}}>
                            <View style={{flexDirection:'row'}}>
                                <Icon
                                    style={{color:'#dd2127'}}
                                    name='location-on'
                                    size={15}
                                    onPress={() => {/*start video*/}} />
                                <Text style={{marginLeft:7.5,fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                    FIND ON GOOGLE MAP
                                </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={{marginLeft:87,marginTop:25.5,height:28.5,width:194.5,borderWidth:1,borderColor:'#dd2127',alignItems:'center',justifyContent:'center'}} onPress= { () => {this.props.navigation.navigate('VenueLayout')}}>
                            <Text style={{fontSize:12,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                VIEW VENUE LAYOUT
                            </Text>
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

export default Venue;