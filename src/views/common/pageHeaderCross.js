import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Font } from 'expo'


class PageHeaderCross extends Component {
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
            <View style={{flex:1}}>
                {this.state.fontLoaded?
                    <View style={styles.container}>
                        <View style={styles.logo}>
                            <Image
                                source={require('../../assets/images/logo/logo_mdpi.png')}
                            />
                        </View>
                        <TouchableOpacity style={styles.IconBtn} onPress={()=>this.props.props.navigation.goBack()}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Icon
                                    style={{color:'#000000'}}
                                    name="angle-left"
                                    size={20}
                                />

                                <Text style={{marginLeft:6,color:'#000000',fontFamily:'hilti-bold'}}>BACK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        backgroundColor:'#dfd6c9'
    },
    logo:{
        flex:1,
        justifyContent:'flex-start',
        marginTop:17,
        marginRight:10,
        marginLeft:19.5
    },
    IconBtn: {
        width:55.5,
        height:25,
        borderWidth:1,
        borderRadius:3,
        borderColor:'#dfd6c9',
        backgroundColor:'#dfd6c9',
        marginTop:14.5,
        marginRight:15.5,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    /*text: {
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
    }*/
});

export default PageHeaderCross;