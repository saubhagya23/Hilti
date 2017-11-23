import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight,TouchableOpacity } from 'react-native';
import PageHeaderCross from '../common/pageHeaderCross'
import Icon  from 'react-native-vector-icons/FontAwesome'

class TravelNavigation extends Component {
    render(){
        console.log("inside Travel overview :",this.props);
        return(
            <View style={styles.container}>

                <View style={{flex:0.1}}>
                    <PageHeaderCross props={this.props}/>
                </View>

                <View style={styles.navigation}>
                    <TouchableOpacity style={styles.navigationOption} onPress={()=>this.props.navigation.navigate('Arrivals',{})}>
                        <Text style={styles.links}>MY ARRIVAL</Text>
                        <Icon
                            style={styles.icons}
                            name='chevron-right'
                            color='red'
                            size={15}
                            onPress={()=>this.props.navigation.navigate('Arrivals',{})}
                        />
                    </TouchableOpacity>

                    <View style={styles.horizontalLine}/>

                    <TouchableOpacity style={styles.navigationOption}  onPress={()=>this.props.navigation.navigate('Departure',{})}>
                        <Text style={styles.links}>MY DEPARTURE</Text>
                        <Icon
                            style={styles.icons}
                            name='chevron-right'
                            color='red'
                            size={15}
                            onPress={()=>this.props.navigation.navigate('Departure',{})}
                        />
                    </TouchableOpacity>

                    <View style={styles.horizontalLine}/>

                    <TouchableOpacity style={styles.navigationOption} onPress={()=>this.props.navigation.navigate('TravelOverview',{})}>
                        <Text style={styles.links}>TRAVEL OVERVIEW</Text>
                        <Icon
                            style={styles.icons}
                            name='chevron-right'
                            color='red'
                            size={15}
                            onPress={()=>this.props.navigation.navigate('TravelOverview',{})}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1,
        backgroundColor:'white'
    },
    horizontalLine: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        width:320,
        marginLeft:10,
        marginTop:10
    },
    navigation:{
        marginTop:20,
        flex:1,
        backgroundColor:'white'
    },
    navigationOption:{
        flexDirection:'row'
    },
    links:{
        color:'red',
        fontSize:17,
        marginTop:20,
        marginLeft:12,
        fontWeight:'bold'
    },
    icons:{
        marginTop:24,
        marginLeft:10
    }
});

export default TravelNavigation;