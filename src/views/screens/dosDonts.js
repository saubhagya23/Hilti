import React, {Component} from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import PageHeaderNotif from '../common/pageHeaderNotif'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Font } from 'expo'

export default class DosDonts extends Component {
    state = {
        fontLoaded:false
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

    render() {
        return (
            <View style={styles.container}>
                {this.state.fontLoaded ?
                    <View style={{flex: 1}}>
                        <PageHeaderNotif props={this.props} parentPage={`DO\'S & DON\'T`}/>
                        <ScrollView>
                        <View style={{backgroundColor:'#f5f3ee'}}>
                            <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#dd2127',marginTop:16.5,marginLeft:19}}>BEFORE KICK OFF</Text>
                            <View style={{backgroundColor:'#ffffff',height:450,marginTop:16}}>
                                <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:19.5}}>Do's</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Lorem Ipsum is that it has a more-or-less normal distributio letters, as opposed to using Content here.
                                    </Text>
                                </View>
                                <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:19.5}}>Don't</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Lorem Ipsum is that it has a more-or-less normal distributio letters, as opposed to using Content here.
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Lorem Ipsum is that it has a more-or-less normal distributio letters, as opposed to using Content here.
                                    </Text>
                                </View>
                            </View>
                            <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#dd2127',marginTop:16.5,marginLeft:19}}>DURING KICK OFF</Text>
                            <View style={{backgroundColor:'#ffffff',height:200,marginTop:16}}>
                                    <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:19.5}}>Do's</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Icon
                                            style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                            name='circle'
                                            size={10}
                                        />
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Icon
                                            style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                            name='circle'
                                            size={10}
                                        />
                                        <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                                        </Text>
                                    </View>
                            </View>
                        </View>
                    </ScrollView>
                    </View>:null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        backgroundColor:'#f5f3ee'
    },
})


