import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons'
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'
import { Font } from 'expo'

class DressCodeDay extends Component {
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

    render(){
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage='Day1' navigation={this.props.navigation}/>
                        <ScrollView>
                            <View style={{height:133.5}}>
                                <ImageBackground
                                    style={{flex:1}}
                                    source={require('../../assets/images/dressCodeWeatherImg/dressCodeWeather_mdpi.png')}
                                >
                                    <View style={{height:62.5,flexDirection:'row'}}>
                                        <View style={{flex:2}}>
                                            <Text style={{marginLeft:20,marginTop:20,fontFamily:'hilti-roman',fontSize:18,color:'#d2051e'}}>Delhi</Text>
                                            <Text style={{marginLeft:20,marginTop:3,fontFamily:'hilti-roman',fontSize:12,color:'#000000'}}>Friday</Text>
                                        </View>
                                        <View style={{flex:0.75}}>
                                            <Text style={{marginTop:15,fontSize:42.2,fontFamily:'hilti-roman',color:'#000000'}}>5</Text>
                                        </View>
                                        <View style={{flex:7.25}}>
                                            <Text style={{marginTop:26,fontFamily:'hilti-roman',fontSize:13,color:'#000000'}}>&deg; C</Text>
                                            <Text style={{marginTop:1.5,marginLeft:8.5,fontFamily:'hilti-roman',fontSize:12,color:'#000000'}}>Cold</Text>
                                        </View>
                                    </View>

                                    <Text style={{marginLeft:19,marginTop:12,fontFamily:'hilti-roman',fontSize:14,color:'#7c294e'}}>
                                        Carry warm clothes
                                    </Text>
                                </ImageBackground>
                            </View>

                            <View style={{height:306}}>
                                <Image
                                    style={{marginTop:2,height:213.5,alignSelf:'center'}}
                                    source={require('../../assets/images/dressDay1_1/dressDay1_1_mdpi.png')}
                                />
                                <View style={{height:90.5}}>
                                    <Text style={{marginLeft:17.5,marginTop:19.5,fontSize:15,fontFamily:'hilti-roman',color:'#dd2127'}}>AFTERNOON : KICK OFF 2018</Text>
                                    <Text style={{marginLeft:19.5,marginTop:7,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>Hilti Red Shirt - Refreshed Brand</Text>
                                </View>
                            </View>

                            <View style={{height:348.5}}>
                                <Image
                                    style={{marginTop:2,height:213.5,alignSelf:'center'}}
                                    source={require('../../assets/images/dressDay1_2/dressDay1_2_mdpi.png')}
                                />
                                <View style={{height:90.5}}>
                                    <Text style={{marginLeft:17.5,marginTop:19.5,fontSize:15,fontFamily:'hilti-roman',color:'#dd2127'}}>EVENING : SERVICE AWARD</Text>
                                    <Text style={{marginLeft:19.5,marginTop:7,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>For Awardees - Business Casuals</Text>
                                    <Text style={{marginLeft:19.5,marginTop:4,marginRight:10,fontSize:12,fontFamily:'hilti-bold',color:'#7c294e'}}>(Shirt + Trouser/Skirt/Jeans + Coat/Blazer or Indian Ethnic)</Text>
                                    <Text style={{marginLeft:19.5,marginTop:4,fontSize:12,fontFamily:'hilti-bold',color:'#000000'}}>For Rest : Smart Casual</Text>
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
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    agendaMainImg: {
        flex:1,
        resizeMode:'stretch'
    }
})

export default DressCodeDay;