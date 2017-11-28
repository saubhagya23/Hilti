import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
//import Icon  from 'react-native-vector-icons/FontAwesome'

class PageHeaderCross extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/images/logo/logo_mdpi.png')}
                    />
                </View>
                <TouchableOpacity style={styles.IconBtn} onPress={()=>this.props.props.navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/cancel_icon/cancel_mdpi.png')}
                    />
                </TouchableOpacity>
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
        width:22.5,
        height:22.5,
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