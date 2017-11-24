import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageHeader from '../common/pageHeader'
import BackTravel from './backTravel'

class MyArrivals extends Component {


    render(){
        console.log("welcome to my arrivals")
        return(
            <View style={styles.container}>

                <View style={{flex:0.2}}>
                    <PageHeader/>
                    <BackTravel props={this.props} text={"My Arrival"}/>
                </View>

                <View style={styles.horizontalLine}/>

                <View style={styles.bodyContainer}>
                    <Image
                        style={styles.downloader}
                        source={require('../../assets/images/excel_icon.png')}
                    />
                    <TouchableOpacity onPress={()=>console.log("download file")}>
                        <Text style={styles.headerText}>DOWNLOAD COMPLETE EXCEL SHEET</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>TOUR OVERVIEW</Text>
                    <Text style={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
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
    bodyContainer:{
        flex:1,
        marginTop:76,
        alignItems: 'center',

    },
    headerText:{
        color:'blue',
        marginTop:20,
        fontWeight:'bold'
    },
    downloader:{
        height:116.5,
        width:116.5
    },
    title:{
        marginTop:25,
        fontSize:25,

    },
    paragraph:{
        marginTop:10,
        color:'grey',
        marginLeft:10,
        marginRight:5
    },
    horizontalLine: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2
    }
});




export default MyArrivals;