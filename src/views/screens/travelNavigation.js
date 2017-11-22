import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight,TouchableOpacity } from 'react-native';
import PageHeader from '../common/pageHeader'
import { Icon } from 'react-native-elements'

class TravelNavigation extends Component {
    render(){
        console.log("inside Travel overview :",this.props);
        return(
            <View style={styles.container}>

                <View style={{flex:0.1}}>
                    <PageHeader/>
                </View>

                <View style={styles.navigation}>
                    <View style={styles.navigationOption} onPress={()=>this.props.navigation.navigate('Arrivals',{})}>
                        <TouchableOpacity>
                            <Text style={styles.links}>MY ARRIVAL</Text>
                        </TouchableOpacity>
                        <Icon
                            raised
                            name='navigate-next'
                            type='MaterialIcons'
                            color='red'
                            size={15}
                            onPress={() => console.log('hello bell')}
                        />
                    </View>

                    <View style={styles.horizontalLine}/>

                    <View style={styles.navigationOption}  onPress={()=>this.props.navigation.navigate('Departure',{})}>
                        <TouchableOpacity>
                            <Text style={styles.links}>MY DEPARTURE</Text>
                        </TouchableOpacity>
                        <Icon
                            raised
                            name='navigate-next'
                            type='MaterialIcons'
                            color='red'
                            size={15}
                            onPress={() => console.log('hello bell')}
                        />
                    </View>

                    <View style={styles.horizontalLine}/>

                    <View style={styles.navigationOption} >
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('TravelOverview',{})}>
                            <Text style={styles.links}>TRAVEL OVERVIEW</Text>
                        </TouchableOpacity>
                        <Icon
                            raised
                            name='navigate-next'
                            type='MaterialIcons'
                            color='red'
                            size={15}
                            onPress={() => console.log('hello bell')}
                        />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1
    },
    horizontalLine: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        width:320,
        marginLeft:10,
        marginTop:10
    },
    navigation:{
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
        marginLeft:12
    }
});

export default TravelNavigation;