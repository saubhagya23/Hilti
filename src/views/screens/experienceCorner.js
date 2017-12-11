import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';
import { Font } from 'expo'
import PageHeaderNotif from '../common/pageHeaderNotif'

class ExperienceCorner extends Component {
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
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage='EXPERIENCE CORNER' navigation={this.props.navigation}/>

                        <ImageBackground
                            style={{height:183}}
                            source={require('../../assets/images/expCornerMainImg/exp_corner_mdpi.png')}
                        >
                            <Text style={{position:'absolute',marginTop:22.5,marginLeft:20,width:240.5,fontSize:14,fontFamily:'hilti-roman',color:'#dd2127'}}>
                                BE READY FOR AN UNFORGETTING EXPERIENCE AT EXHILARATING EXPERIENCE ZONES
                            </Text>
                            <Text style={{position:'absolute',marginTop:85,marginLeft:18.5,fontSize:9,fontFamily:'hilti-bold',color:'#7c294e'}}>
                                Check-out this page on Jan 07, 2018 for details.
                            </Text>
                        </ImageBackground>
                    </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
})

export default ExperienceCorner;
