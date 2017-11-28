import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome'

class PageHeader extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/images/logo/logo_mdpi.png')}
                    />
                </View>
                <View style={styles.IconBtn}>
                    <Icon
                        name='bell'
                        size={20}
                        onPress={() => console.log('hello bell')} />

                    <Icon
                        name='user-circle-o'
                        size={20}
                        onPress={() => console.log('hello user')} />
                </View>
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
        marginTop:10,
        marginRight:10,
        marginLeft:19.5
    },
    IconBtn: {
        flex: 0.3,
        marginTop:10,
        marginLeft:5,
        flexDirection:'row',
        justifyContent:'space-around'
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

export default PageHeader;