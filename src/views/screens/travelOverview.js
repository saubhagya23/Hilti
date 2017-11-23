import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PageHeader from '../common/pageHeader'
import { getFile } from '../../actions/apiData';

class TravelOverview extends Component {

    downloadFile = () => {
        const { getFile } = this.props;
        getFile().then(data=>console.log("data got in component is :",data))
    }

    render(){
        return(
            <View style={styles.container}>

                <View style={{flex:0.2}}>
                    <PageHeader/>
                </View>

                <View style={styles.horizontalLine}/>

                <View style={styles.bodyContainer}>
                    <Image
                        style={styles.downloader}
                        source={require('../../assets/images/excel_icon.png')}
                    />
                    <Text style={styles.headerText}
                          onPress={this.downloadFile}>
                        DOWNLOAD COMPLETE EXCEL SHEET
                    </Text>
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

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getFile,
            },
            dispatch
        ),
    };
}


export default connect(null, mapDispatchToProps)(TravelOverview)