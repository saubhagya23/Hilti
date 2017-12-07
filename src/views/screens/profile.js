import React, {Component} from 'react';
import { StyleSheet, View ,Text } from 'react-native';
import { Font } from 'expo'
import { connect } from 'react-redux';
import PageHeaderNotif from '../common/pageHeaderNotif'

class Profile extends Component {
    constructor(){
        super();

        this.state = {
            fontLoaded:false,
            userDetail:{}
        }
    }

    async componentWillMount(){
        await Font.loadAsync({
            'hilti-bold': require('../../assets/fonts/Hilti-Bold.ttf'),
            'hilti-roman': require('../../assets/fonts/Hilti-Roman.ttf'),
        });
        this.setState({
            fontLoaded:true
        });
    }

    render() {
        let detail = JSON.parse(this.props.userDetail);
        return (
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage='Profile' navigation={this.props.navigation}/>
                            <View style={{backgroundColor:'grey',height:150}}>

                            </View>
                            <View style={{marginLeft:20,marginTop:20}}>
                                <Text>Name</Text>
                                <Text style={{color:'lightgrey'}}>{detail.Name}</Text>
                                <Text style={{marginTop:10}}>Email Id</Text>
                                <Text style={{color:'lightgrey'}}>{detail.EmailId}</Text>
                                <Text style={{marginTop:10}}>Team</Text>
                                <Text style={{color:'lightgrey'}}>{detail.TeamSplit}</Text>
                                <Text style={{marginTop:10}}>Code</Text>
                                <Text style={{color:'lightgrey'}}>{detail.Code}</Text>
                            </View>
                        </View>
                        :null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1
    }
});

function mapStateToProps (state) {
    return {
        userDetail:state.event.userDetail
    }
}


export default connect(mapStateToProps, null)(Profile)

