import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Font } from 'expo'
import {BoxShadow} from 'react-native-shadow';
import  moment from 'moment'

const {height, width} = Dimensions.get('window');
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
        return(
                <View>
                {  
                    this.state.fontLoaded  ? (
                        <View style={styles.container}>
                            <View style={{flexDirection:'row',marginBottom:10}}>
                                <Text style={{
                                        alignSelf:'flex-start',
                                        marginTop:16,
                                        flex:1,
                                        fontSize:14,
                                        fontFamily:'hilti-roman',
                                        color:'#dd2127'}}>
                                    {this.props.notification.title}
                                </Text>
                                <Text style={{
                                    flexShrink:1,
                                    alignSelf: 'flex-end',
                                    fontSize: 9,
                                    color: '#5b5b5b',
                                    textAlign:'right'
                                }}>{moment(this.props.notification.timestamp).fromNow()}</Text>

                            </View>
                                

                                {(typeof(this.props.notification.data)!='undefined') ?
                                <View style={{flex:1,height:250,width:width}}>
                                    <Image 
                                    style={{flex:1, height: undefined, width: undefined}}
                                    resizeMode='contain' source={{uri:this.props.notification.data.url}}/> 
                                </View>
                                :null}

                                <View style={{
                                    alignItems:'flex-start',
                                    flex:1}}>
                                    <Text style={{
                                        textAlign: 'left',
                                        fontFamily:'hilti-roman',
                                        fontSize:10,
                                        color:'#000000',
                                        marginVertical:10}}>
                                        {this.props.notification.body}
                                        </Text>
                                </View> 
                                <View style={styles.horizontalLine}></View>  
                        </View>):null
                }
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width-20,
        flexShrink:1,
        backgroundColor: "#fff",
        borderRadius:1,
        overflow:"hidden",
        justifyContent:'center',
        paddingHorizontal: 10,
    },
    horizontalLine: {
        height: 2,
        width: width-20,
        backgroundColor: '#d6d6d6' ,
        paddingHorizontal: 10,
    }
});
export default Notification;