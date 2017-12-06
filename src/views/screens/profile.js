import React, {Component} from 'react';
import { StyleSheet, View ,Text } from 'react-native';
import { Font } from 'expo'

import PageHeaderNotif from '../common/pageHeaderNotif'

class Profile extends Component {
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

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>
                            <PageHeaderNotif props={this.props} parentPage='Profile'/>
                            <View style={{backgroundColor:'grey',height:150}}>

                            </View>
                            <View style={{marginLeft:20,marginTop:20}}>
                                <Text>Name</Text>
                                <Text style={{color:'lightgrey'}}>Puja</Text>
                                <Text style={{marginTop:10}}>Email Id</Text>
                                <Text style={{color:'lightgrey'}}>puja.goyal@tothenew.com</Text>
                                <Text style={{marginTop:10}}>Team</Text>
                                <Text style={{color:'lightgrey'}}>abc</Text>
                                <Text style={{marginTop:10}}>Code</Text>
                                <Text style={{color:'lightgrey'}}>89351</Text>
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

export default Profile
