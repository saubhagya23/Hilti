import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome'
import PageHeaderNotif from '../common/pageHeaderNotif'
import { Font } from 'expo'
import DetailContainer from '../common/detailContainer'
import { getStay } from '../../actions/apiData';

class ComingSoon extends Component {
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
        let details={...this.props.stayList};
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage='Emergency Contact No.' navigation={this.props.navigation}/>
                        <Text style={{alignSelf:'center',color:'#dd2127',marginTop:200,marginLeft:15}}>Emergency contacts will be available after 1 Jan, therefore, please write in to Annual kick off Email ID</Text>
                    </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f5f3ee'
    },
    bodyContainer:{
        flex:1,
    },
    header:{
        backgroundColor:'#F5F3EE',
        height:30,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        alignItems:'center'
    },
    text:{
        color:'red'
    },
    detail:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5,
        marginBottom:5,
        paddingBottom:7,
        borderBottomColor:'#F5F3EE',
        borderBottomWidth:2
    },
    noBorder:{
        borderBottomWidth:0
    },
    heading:{
        color:'lightgrey'
    },
    icon:{
        marginTop:10
    },
    detailParent:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15
    }
});

export default ComingSoon