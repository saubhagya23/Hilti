import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Font } from 'expo'
import {BoxShadow} from 'react-native-shadow';


class Notification extends Component {
    constructor(){
        super();
        this.state = {
            fontLoaded:false,
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
        var {height, width} = Dimensions.get('window');
        const boxHeight = (typeof(this.props.notification.data)!='undefined') ? 256:80;
        const shadowOpt = {
            width:width-16,
            height:boxHeight,
            color:"#000",
            borderBottom:1,
            radius:1,
            opacity:0.2,
            x:0,
            y:2,
            style:{marginVertical:1}
        }
        return(
                <View>
                {  
                    this.state.fontLoaded  ? (
                    <BoxShadow setting={shadowOpt}>
                        <View
                            style={{position:"relative",
                                width: width-16,
                                height:boxHeight,
                                backgroundColor: "#fff",
                                borderRadius:1,
                                overflow:"hidden",
                                justifyContent:'flex-start'
                            }}
                        >
                            
                            {(typeof(this.props.notification.data)!='undefined') ? (
                                <View style={{flex: 1}}>
                                    <Text style={{alignSelf:'flex-start',marginTop:16,flex:0.1,fontSize:14,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                    {this.props.notification.title}
                                    </Text>
                                    <Image style={{flex:0.7}} source={{uri:this.props.notification.data.url}}/> 
                                    <View style={{justifyContent:'center',alignItems:'flex-start',flex:0.2}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000'}}>
                                            {this.props.notification.body}
                                        </Text>
                                    </View>
                                </View>
                            ): (
                                <View style={{flex: 1}}>                                
                                    <Text style={{alignSelf:'flex-start',marginTop:16,flex:1,fontSize:14,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                    {this.props.notification.title}
                                    </Text>
                                    <View style={{justifyContent:'center',alignItems:'flex-start',flex:1}}>
                                        <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#000000'}}>
                                            {this.props.notification.body}
                                        </Text>
                                    </View>
                                </View>
                            )
                            }
                            
                            
                        </View>
                        </BoxShadow>):null
                }
                </View>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 22,
//         flex: 1,
//         backgroundColor:'#ffffff'
//     },
// });
export default Notification;