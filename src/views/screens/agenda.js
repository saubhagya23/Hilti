import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons'
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
                <View style={{flex:0.3,position:'relative'}}>
                    <View style={{flex:1,borderWidth:1,borderColor:'black'}}>
                        <Image
                            style={{flex:1}}
                            source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAe1BMVEX+/v7////tMzfsGiDtKzDxc3X72tvsFh386entLzPtKS3zgoT0kpT+9vbwYGLsEhrvU1bsISb4trfziInxaGr4wsPvSk71o6TxeXvzi43uOz/97OzrAADsJCnzg4X2qKr1nJ75ysv73t/70tPrAAzvVlj4u7zvREfxZWdRIuiMAAADCUlEQVR4nO3bW1PaUBRAYUhiNSgFxFIuRitW6///hVVbuyabXAy1MyWs9Xhmew75HB9MwmBIg2NquNtACy20IC1IC9KCtCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtSAvSgt5nUTHVq7pYfOp32+G7LYbj67TPTaZdLCZJn8s/a/GWFqQFaUFaUHeLfBRq3D+rmI5LWdWuedVucWi/8t3Ple9lkV+t5qVW6yaKOD3PklFYmS+zJJ/GXRcVGOuLD2maJ9myfNo038di9hjnqj71W7O7OH2aTOLS5jQZ3cTFZbazWb6o+JR79Lx1ui0vzUd7WVyGf9SaLb6Up39blNfOni3O464nlRaDD+jV4lNpq+G5FlpooYUWWmihhRZaHJDFelJ/O/X6yCy2TbfZx0dl0fIAKc7226LT59CCQ7XgUC04VAsO/UuLhuJB9fXBIkkepnUtbssX97ioHX1YJ32wyGubfS1f3GVaP5v0wqK+IlrMGse1OFiLImsq/j/Ya4uLp6umngJGny3aXpMbhMfcvbZo2Sc+8tdCi8H/a1H/R/3nJ4/FYrg6r295H6675xY/ivpXYCb73u88UIt/ch9cCy200EILLbTQQgsttMAi1GIRqngf/JdFtyosSrVZhPfBb/ayKG43Z6XGTRbFZZjepEl6Fpbu0yRbhrm2tmn5oNG3canbotFidlc6b/P6Jn73748Up6EGiorpl19KWHq5rCzOtZTGg0aTUs0Uzxjl7V4fQPi9ItKCtCAtSAvSgrpZfG983nvoFZ0srk563er9Fm3Pew+/2svctTiStCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtSAvSgrQgLUgL0oK0IC1IC9KCtCAtqMLiJws2t1xUjLj5AAAAAElFTkSuQmCC'}}/>
                    </View>
                    <View style={{flex:0.1,backgroundColor:'red',height:65,width:65,position:'absolute',zIndex:1,marginTop:150,marginLeft:10,justifyContent:'center',alignItems:'center'}}>

                        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>28</Text>
                        <Text style={{color:'white'}}>JAN</Text>
                    </View>
                </View>
                <View style={{flex:0.1,backgroundColor:'white',justifyContent:'center',paddingLeft:85}}>
                    <Text style={{fontWeight:'bold'}}>Leela Ambience, Delhi</Text>
                    <View style={{flexDirection:'row'}}>
                        <Icon
                            style={{color:'#9a9997'}}
                            name='location'
                            size={20}
                            onPress={()=>{}} />
                        <View>
                            <Text style={{color:'#9a9997'}}>8, NH148A, Ambience Island,Nathupur</Text>
                            <Text style={{color:'#9a9997'}}>Sector-24, Gurugram, Haryana</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.075,backgroundColor:'#f5f3ee',justifyContent:'center',paddingLeft:15}}>
                    <Text style={{color:'red',fontWeight:'bold'}}>MARKETING REACH TEAM</Text>
                    <Text style={{color:'black',fontSize:12}}>Dress Code: Hilti red shirt+Coat/Blazer+Dark Trouser/Skirt</Text>
                </View>
                <View style={{flex:0.280,backgroundColor:'white',marginLeft:5, marginRight:5,justifyContent:'center',paddingLeft:10,marginTop:5}}>
                    <Text style={{color:'black',fontWeight:'bold',fontSize:15}}>Trade Application Demo Session</Text>
                    <Text style={{color:'grey',fontSize:10}}>(Please refer your respective detailed agenda)</Text>
                    <View style={{flexDirection:'row'}}>
                        <Icon
                            style={{color:'grey',marginTop:2}}
                            name='clock'
                            size={12}
                            onPress={()=>this.props.props.navigation.goBack()} />
                        <Text style={{color:'black',fontSize:10,marginLeft:3}}>9.00-18.00</Text>
                        <Text style={{color:'grey',fontSize:10,marginLeft:3}}>- 9 Hr</Text>
                    </View>
                    <Text style={{color:'black',fontSize:12}}>PARTICIPANTS :</Text>
                    <Text style={{color:'grey',fontSize:12}}>Sales(Mainstream-N/C)</Text>
                    <Text style={{color:'grey',fontSize:12}}>Sales(MainStream-W/S)</Text>
                    <Text style={{color:'grey',fontSize:12}}>Sales-E&I</Text>
                    <Text style={{color:'grey',fontSize:12}}>Key Accounts & Engineering</Text>
                    <Text style={{color:'grey',fontSize:12}}>E&I(Technical)</Text>
                    <Text style={{color:'grey',fontSize:12}}>Marketing-Trade, PLS & Strategic Marketing Team</Text>
                </View>
                <View style={{flex:0.2,backgroundColor:'white',marginTop:5,marginRight:5,marginLeft:5,paddingLeft:10}}>
                    <Text style={{color:'black',fontWeight:'bold',fontSize:15}}>Functional Meetings</Text>
                    <Text style={{color:'grey',fontSize:10}}>(Please refer your respective detailed agenda)</Text>
                    <Text style={{color:'black',fontSize:12}}>Finance, HR, Marketing-GCC, Operations, Professional Service, Supply Chain</Text>
                    <View style={{flexDirection:'row'}}>
                        <Icon
                            style={{color:'grey',marginTop:2}}
                            name='clock'
                            size={12}
                            onPress={()=>this.props.props.navigation.goBack()} />
                        <Text style={{color:'black',fontSize:10,marginLeft:3}}>9.00-18.00</Text>
                        <Text style={{color:'grey',fontSize:10,marginLeft:3}}>- 9 Hr</Text>
                    </View>
                    <Text style={{color:'black',fontSize:12}}>PARTICIPANTS :</Text>
                    <Text style={{color:'grey',fontSize:12}}>All respective team members</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f3ee'
    },
    agendaMainImg: {
        flex:1,
        resizeMode:'stretch'
    }
})

export default Agenda;