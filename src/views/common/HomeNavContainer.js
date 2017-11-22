import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class HomeNavContainer extends Component {
    constructor(){
        super();
    }

    render(){
        console.log('props  in home nav con--',this.props);
        return(
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/images/mdpi.png')}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Travel</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    imgContainer:{
        flex:0.7,
        alignItems:'center'
    },
    img:{
        flex:1
    },
    titleContainer:{
        flex: 0.3,
        alignItems:'center'
    },
    title:{
        flex:1
    }
})
