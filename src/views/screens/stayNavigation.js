import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PageHeaderCross from '../common/pageHeaderCross'
import { Font } from 'expo'
import Icon  from 'react-native-vector-icons/Entypo'

class StayNavigation extends Component {
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
        console.log("inside Travel overview :",this.props);
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <View style={{height:50}}>
                            <PageHeaderCross props={this.props}/>
                        </View>

                        <View style={styles.navigation}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    height: 64.5,

                                }}
                                onPress={()=>this.props.navigation.navigate('SubmitId',{})}>
                                <Text style={{color:'#dd2127',
                                    fontSize:16,
                                    marginTop:21.5,
                                    marginLeft:19,
                                    fontFamily:'hilti-roman'}}>Submit Your ID</Text>

                                {/*<Image
                                    style={{marginTop:28,marginLeft:5.5}}
                                    source={require('../../assets/images/arrow_icon/arrow_mdpi.png')}
                                />*/}
                                <Icon
                                    style={{color:'#7c294e',marginTop:22,marginLeft:1.5}}
                                    name='chevron-right'
                                    size={20}
                                    onPress={() => {}} />
                            </TouchableOpacity>

                            <View style={{height:0.5}}>
                                <View style={{height:0.5,marginLeft:12,marginRight:12,backgroundColor:'#000000',opacity:0.2}}/>
                            </View>

                            <TouchableOpacity
                                style={{
                                    height:63.5,

                                    flexDirection:'row'
                                }}
                                onPress={()=>this.props.navigation.navigate('MyStay',{})}>
                                <Text style={{color:'#dd2127',
                                    fontSize:16,
                                    marginTop:21.5,
                                    marginLeft:19,
                                    fontFamily:'hilti-roman'}}>My Stay</Text>
                                {/*<Image
                                    style={{marginTop:27,marginLeft:4.5,width:8,height:12}}
                                    source={require('../../assets/images/arrow_icon/arrow_mdpi.png')}
                                />*/}
                                <Icon
                                    style={{color:'#7c294e',marginTop:23,marginLeft:1.5}}
                                    name='chevron-right'
                                    size={20}
                                    onPress={() => {}} />
                            </TouchableOpacity>

                            <View style={{height:0.5}}>
                                <View style={{height:0.5,marginLeft:12,marginRight:12,backgroundColor:'#000000',opacity:0.2}}/>
                            </View>

                            <TouchableOpacity
                                style={{
                                    height:64.5,
                                    flexDirection:'row'
                                }}
                                onPress={()=>this.props.navigation.navigate('StayOverview',{})}>
                                <Text style={{color:'#dd2127',
                                    fontSize:16,
                                    marginTop:19.5,
                                    marginLeft:18.5,
                                    fontFamily:'hilti-roman'}}>Stay Overview</Text>
                                {/*<Image
                                    style={{marginTop:25.5,marginLeft:5.5}}
                                    source={require('../../assets/images/arrow_icon/arrow_mdpi.png')}
                                />*/}
                                <Icon
                                    style={{color:'#7c294e',marginTop:21,marginLeft:1.5}}
                                    name='chevron-right'
                                    size={20}
                                    onPress={() => {}} />
                            </TouchableOpacity>

                        </View>
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
        backgroundColor:'white'
    },
    horizontalLine: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        width:320,
        marginLeft:10,
        marginTop:10
    },
    navigation:{
        height:199,
        backgroundColor:'#dfd6c9'
    },
    navigationOption:{
        flexDirection:'row',
        height:64.5
    },
    links:{
        color:'red',
        fontSize:17,
        marginTop:27.5,
        marginLeft:19,
        fontWeight:'bold'
    },
    icons:{
        marginTop:24,
        marginLeft:10
    }
});

export default StayNavigation;