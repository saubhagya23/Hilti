import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Font } from 'expo'

class PageHeaderNotif extends Component {
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
            <View style={{height:80}}>
                {this.state.fontLoaded?
                    <View style={{flex:1,shadowColor:'#000000',shadowOffset:{width:0,height:5},shadowRadius:3,shadowOpacity:5}}>
                        <View style={styles.container}>
                            <Image
                                style={{marginTop:20,marginLeft:19.5}}
                                source={require('../../assets/images/logo/logo_mdpi.png')}
                            />

                            <TouchableOpacity style={{marginLeft:175.5, marginTop:19.5, marginRight:24}} onPress={()=>this.props.props.navigation.goBack()}>
                                <Icon
                                    name='bell'
                                    size={20}
                                    onPress={()=>this.props.props.navigation.goBack()} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{marginTop:19, marginRight:10}} onPress={()=>this.props.props.navigation.goBack()}>
                                <Icon
                                    name='user-circle-o'
                                    size={20}
                                    onPress={()=>this.props.props.navigation.goBack()} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{height:26.5,
                                flexDirection:'row',
                                backgroundColor:'white'}}
                            onPress={()=>this.props.props.navigation.goBack()}>
                            <Icon
                                style={{marginLeft:19.5}}
                                name="angle-left"
                                size={20}
                            />
                            <Text style={{marginLeft:8,color:'#000000',fontFamily:'hilti-roman'}}>Back | </Text>
                            <Text style={{color:'#dd2127',fontFamily:'hilti-roman'}}>{this.props.parentPage}</Text>
                        </TouchableOpacity>
                    </View>:null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:53.5,
        flexDirection:'row',
        backgroundColor:'white',
        marginTop:3
    },
    logo:{
        flex:1,
        justifyContent:'flex-start',
        marginTop:17,
        marginRight:10,
        marginLeft:10
    },
    IconBtn: {
        flex: 1,
        marginTop:17,
        marginRight:10,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    icon: {
        height: 25,
        width: 40
    }
});

export default PageHeaderNotif;