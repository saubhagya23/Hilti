import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Font } from 'expo'

export default class HomeNavContainer extends Component {
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
        console.log('props in home nav con----',this.props);
        let conDirection = '',conHeight, conWidth = 0;
        if(this.props.direction){
            conDirection = this.props.direction;
            conHeight = this.props.conHeight;
            conWidth = this.props.conWidth;
            conMarLeft = this.props.conMarLeft||0;

            imgHeight=this.props.imgHeight;
            imgWidth=this.props.imgWidth;
            imgMarLeft=this.props.imgMarLeft||0;
            imgMarTop=this.props.imgMarTop||0;

            titleConHeight=this.props.titleConHeight;
            titleConWidth=this.props.titleConWidth;
            titleConMarLeft=this.props.titleConMarLeft||0;

            titleHeight=this.props.titleHeight;
            titleWidth=this.props.titleWidth;
            titleMarLeft=this.props.titleMarLeft;
            titleMarTop=this.props.titleMarTop;
        }
        else{
            conDirection = 'column';
            conHeight = this.props.conHeight;
            conWidth = this.props.conWidth;
            conMarLeft = this.props.conMarLeft||0;

            imgHeight=this.props.imgHeight;
            imgWidth=this.props.imgWidth;
            imgMarLeft=this.props.imgMarLeft||0;
            imgMarTop=this.props.imgMarTop||0;

            titleConHeight=this.props.titleConHeight;
            titleConWidth=this.props.titleConWidth;
            titleConMarLeft=this.props.titleConMarLeft||0;

            titleHeight=this.props.titleHeight;
            titleWidth=this.props.titleWidth;
            titleMarLeft=this.props.titleMarLeft;
            titleMarTop=this.props.titleMarTop;
        }
        let imgPath = this.props.imgSrc;
        let navigationPage = this.props.navigationPage;
        return(
            <View style={{flex:1}}>
                {this.state.fontLoaded?
                    <TouchableOpacity
                        style={{height:conHeight,
                            width:conWidth,
                            marginLeft:conMarLeft,
                            backgroundColor:'white',
                            flexDirection:conDirection
                        }}
                        onPress={() => this.props.homeNavProps.navigation.navigate(`${navigationPage}`,{})}
                    >
                        <Image
                            style={{width:imgWidth,
                                height:imgHeight,
                                marginLeft:imgMarLeft,
                                marginTop:imgMarTop,
                                backgroundColor:'white',
                                alignSelf:'center'}}
                            source={imgPath}
                            resizeMode='stretch'
                        />
                        <View style={{width:titleConWidth,
                            height:titleConHeight,
                            marginLeft:titleConMarLeft
                            }}>
                            <Text
                                style={{height:titleHeight,
                                    width:titleWidth,
                                    marginTop:titleMarTop,
                                    marginLeft:titleMarLeft,
                                    color:'#dd2127',
                                    fontFamily:'hilti-roman',
                                    fontSize:10,
                                    letterSpacing:0.5
                                }}>
                                {this.props.titleText}</Text>
                        </View>
                    </TouchableOpacity>:null
                }
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
        width:111.5,
        height:103.5,
        backgroundColor:'blue'
    },
    titleContainer:{
        width:111.5,
        height:34,
        alignItems:'center',
        justifyContent:'center'

    },
    title:{
        flex:1,
        color:'red'
    }
})
