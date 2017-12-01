import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { FileSystem } from 'expo';
import PageHeaderNotif from '../common/pageHeaderNotif'

import BackTravel from './backTravel'

class TravelOverview extends Component {

    downloadFile = () => {
        console.log('*************************',FileSystem.documentDirectory);
          FileSystem.downloadAsync(
            'http://13.68.114.98:9000/api/documents/download/Travel_Overview.xlsx',
            FileSystem.documentDirectory + 'Travel_Overview.xlsx'
          )
            .then(({ uri }) => {
              console.log('Finished downloading to ', uri);
            })
            .catch(error => {
              console.error(error);
            });
        }


    render(){
        return(
            <View style={styles.container}>

                <View style={{flex:0.2}}>
                    <PageHeaderNotif props={this.props} parentPage='TRAVEL OVERVIEW'/>
                </View>
                <View style={styles.bodyContainer}>
                    <Image
                        style={styles.downloader}
                        source={require('../../assets/images/excel_icon.png')}
                    />
                    <TouchableOpacity onPress={this.downloadFile}>
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
        marginTop:80,
        alignItems: 'center',

    },
    headerText:{
        color:'red',
        marginTop:20,
        fontWeight:'bold'
    },
    downloader:{
        borderRadius:30
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




export default TravelOverview;