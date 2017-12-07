import React, {Component} from 'react';
import { StyleSheet, View ,Text ,TouchableOpacity } from 'react-native';
import { Font } from 'expo'
import { connect } from 'react-redux';
import PageHeaderNotif from '../common/pageHeaderNotif'
import Icon  from 'react-native-vector-icons/FontAwesome';
import { asyncRemove } from '../../utils/asyncStore'

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
        let detail;
        if(this.props.userDetail){
            detail = this.props.userDetail;
        }

        if(typeof this.props.userDetail === "string"){
            detail = JSON.parse(this.props.userDetail)
        }

        return (
            <View style={styles.container}>
                {
                    this.state.fontLoaded?
                        <View style={{flex:1}}>

                            <PageHeaderNotif props={this.props} parentPage='Profile' navigation={this.props.navigation}/>

                            <View style={{marginLeft:20,marginTop:20}}>

                                <TouchableOpacity style={{backgroundColor:"red",width:100}}
                                    onPress={()=>{
                                    asyncRemove('token');
                                    asyncRemove('userDetail');
                                    this.props.navigation.navigate('Login',{})
                                }}>
                                    <Text>LOGOUT</Text>
                                </TouchableOpacity>

                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <Icon name='user'/>
                                    <Text style={{marginLeft:10}}>Name</Text>
                                </View>
                                <Text style={{color:'lightgrey',marginLeft:20}}>{detail.Name}</Text>

                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <Icon name="envelope"/>
                                    <Text style={{marginLeft:10}}>Email Id</Text>
                                </View>
                                <Text style={{color:'lightgrey',marginLeft:20}}>{detail.EmailId}</Text>

                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <Icon name="group"/>
                                    <Text style={{marginLeft:10}}>Team</Text>
                                </View>
                                <Text style={{color:'lightgrey',marginLeft:20}}>{detail.Team}</Text>

                                <View style={{flexDirection:"row",marginTop:10}}>
                                    <Icon name="id-card"/>
                                    <Text style={{marginLeft:10}}>Code</Text>
                                </View>
                                <Text style={{color:'lightgrey',marginLeft:20}}>{detail.Code}</Text>

                            </View>

                            <View
                                style={{
                                    marginTop:10,
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />

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

