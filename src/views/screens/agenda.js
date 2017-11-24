import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import PageHeaderNotif from '../common/pageHeaderNotif'
import BackTravel from './backTravel'

class Agenda extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:0.15}}>
                    <View style={{flex:0.6}}>
                        <PageHeaderNotif props={this.props}/>
                    </View>
                    <View style={{flex:0.4}}>
                        <BackTravel parentPage='Agenda' props={this.props}/>
                    </View>


                </View>
                <View style={{flex:0.25,borderWidth:1,borderColor:'black'}}>
                    <Image
                        style={styles.agendaMainImg}
                        source={require('../../assets/images/brandLogo.png')}
                    />
                </View>
                <View style={{flex:0.1,backgroundColor:'red',height:65,width:65,position:'absolute',zIndex:1,marginTop:235,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>28</Text>
                        <Text style={{color:'white'}}>JAN</Text>

                </View>
                <View style={{flex:0.1,backgroundColor:'yellow'}}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'aqua'
    },
    agendaMainImg: {
        flex:1,
        resizeMode:'stretch'
    }
})

export default Agenda;