import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'

class PageHeader extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/images/mdpi.png')}
                    />
                </View>
                <View style={styles.bellIconBtn}>
                    <Icon
                        raised
                        name='bell'
                        type='font-awesome'
                        color='black'
                        onPress={() => console.log('hello bell')} />
                </View>
                <View style={styles.userIconBtn}>
                    <Icon
                        raised
                        name='user'
                        type='font-awesome'
                        color='black'
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
        flex:0.6,
        justifyContent:'flex-start',
        marginTop:10,
        marginRight:10
    },
    bellIconBtn: {
        flex: 0.2,
    },
    userIconBtn:{
        flex: 0.2,
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