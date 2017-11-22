import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PageHeader from '../common/pageHeader'

class TravelOverview extends Component {
    render(){
        return(
            <View style={styles.container}>

                <View style={{flex:0.2}}>
                    <PageHeader/>
                </View>

                <View style={styles.bodyContainer}>
                    <Image
                        style={styles.downloader}
                        source={require('../../assets/images/excelDownloader.png')}
                    />
                    <Text style={styles.headerText}>DOWNLOAD COMPLETE EXCEL SHEET</Text>
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
        flex: 1
    },
    bodyContainer:{
        flex:1,
        marginTop:120,
        alignItems: 'center'
    },
    headerText:{
        color:'red',
        marginTop:20
    },
    downloader:{
        borderRadius:70,
        height:150,
        width:150
    },
    title:{
        marginTop:25,
        fontSize:25
    },
    paragraph:{
        marginTop:20,
        color:'lightgrey',
        marginLeft:10,
        marginRight:5
    }
});

export default TravelOverview;