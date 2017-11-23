import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class HomeNavContainer extends Component {
    constructor(){
        super();
    }

    render(){
        let conDirection = '',conHeight, conWidth = 0;
        if(this.props.direction){
            conDirection = this.props.direction;
            conHeight = 100;
            conWidth = 340;
        }
        else{
            conDirection = 'column';
            conHeight = 100;
            conWidth = 100;
        }
        console.log('props  in home nav con--',this.props.imgSrc);
        let imgPath = this.props.imgSrc;
        return(
            <View style={{height:conHeight,
                width:conWidth,
                borderWidth:1,
                borderColor:'black',
                backgroundColor:'aqua',
                marginTop:20,
                flexDirection:conDirection
            }}>
                <Image
                    style={styles.img}
                    source={imgPath}
                    resizeMode='stretch'
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.titleText}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:100,
        width:100,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'aqua',
        marginTop:20

    },
    imgContainer:{
        flex:0.7,
        backgroundColor:'yellow'

    },
    img:{
        flex:0.7,
        backgroundColor:'blue'
    },
    titleContainer:{
        flex: 0.3,
        alignItems:'center',
        justifyContent:'center'

    },
    title:{
        flex:1,
        color:'red'
    }
})
