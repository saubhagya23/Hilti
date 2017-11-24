import React, {Component} from 'react';
import { StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome'

class PageHeaderCross extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/images/mdpi.png')}
                    />
                </View>
                <TouchableOpacity style={styles.IconBtn}>
                    <Icon
                        name='times'
                        size={20}
                        onPress={()=>this.props.props.navigation.goBack()} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        backgroundColor:'white'
    },
    logo:{
        flex:1,
        justifyContent:'flex-start',
        marginTop:20,
        marginRight:10,
        marginLeft:19.50,
        height:22.5,
        width:93.5
    },
    IconBtn: {
        flex: 1,
        marginTop:20,
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

export default PageHeaderCross;