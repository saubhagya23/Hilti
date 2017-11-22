import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postEvent } from '../../actions/apiData';

// You can import from local files
/*import AssetExample from './components/AssetExample';
import Header from './components/Header';*/

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // 0.17.0

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: 'enter email id',
            empCode: 'enter employee code'
        };
    }

    login = () => {
        let empLoginInfo = {
            email: this.state.empId,
            password: this.state.empCode
        }
        const { postEvent } = this.props;
        let APILOGINCALL = postEvent(empLoginInfo).then(eventLoginList => console.log('eventLoginList sucess', eventLoginList));
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
            <View style={{flex:1}}>
                <View style={styles.container1}>
                    <Image
                        style={{marginTop:40}}
                        source={require('../../assets/images/xhdpi.png')}
                    />

                    <Text style={{fontSize:28, marginTop:40, color:'white'}}>Sign In</Text>
                    <View style={{backgroundColor:'red', width:280, height:80, marginTop:20}}>
                        <Text style={{fontSize:15, paddingTop:20 , color:"white"}}>EMAIL ID</Text>
                        <TextInput
                            style={{height: 40, borderWidth: 1 ,color:'white', placeholderTextColor:'white', borderColor:'red', width: 280}}
                            onChangeText={(empId) => this.setState({empId})}
                            value={this.state.empId}
                            onFocus={() => {this.setState({empId:''})}}
                        />
                    </View>
                    <View style={{backgroundColor:'red', width:280, height:80, marginTop:10}}>
                        <Text style={{fontSize:15, paddingTop:20 , color:"white"}}>PASSWORD</Text>
                        <TextInput
                            style={{height: 40, borderWidth: 1,color:'white' , placeholderTextColor:'white', borderColor:'red', width: 280}}
                            onChangeText={(empCode) => this.setState({empCode})}
                            value={this.state.empCode}
                            onFocus={() => {this.setState({empCode:''})}}
                        />
                    </View>
                    <TouchableHighlight style={styles.button} onPress= { () => {this.login()}}>
                        <View>
                            <Text style={{color:'red',fontSize:15,  padding:10}}>SIGN IN</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/*<Image
                    style={{width:150, height:100}}
                    source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAtFBMVEX////UFSf8/PzXIzTSAxb8/P3nhI7SFSfhZWrPCx38///TECP8/PrTCBvZanbjvLz68PL29fb56u7ZKjvWDSDOM0LkfYbJSVb23+TghI7blp/OFSa+JDPYTFbUVGHICBrShY71ra/cnaTYU13uys3ZMUDMHC7z0tb4x83y5uPXQk3Pen/FTFnRipLgYWnaTVf///bcOUfkXmjXWWLhjJfx1dncqK32ubngbHfTRlXldYPJOEnLDIi5AAAED0lEQVR4nO3ZeV/TMBwG8KRryHIUOSqKFSYOuVTAG/T9vy+TrkfSJrPdRHCf5/sP0KVpnv7StCuEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKaYbIZ3hG6GCYI8MQjy1DRBVJY6sjzSXoluM2+/tLdBUM47feTp6ij3B5qqbpDJwZbrk6Ihqrjzmt0L/tPbcCP43Nvw2e2IK8qpON5a2R1XZ95ADybKC8LFvvTuLl9U9zwuBnJ27raSXzO+4+23lYq33oYfwuvAnozvq9/0vtH89a43gn0/CFX7O1KzpKSl1PMsWBJ1diFZ1cwgh2Ly0uxX75mQg2z2iiQtedINooq3boNR5CnPX+9Vu5ujarITCOJ0L2/n4YvEBCFaV60YI4cZf0lYE4SRg1R4QciJ3xGnSq0Z5LIOkkgZDCITvWCy6nmwINxWRNfNqoqQ8tyUqiC6RU68jmxFzNzTKyKnXJmKVMfXUstekNxUhNWnWjJ9lAkVkBft1DI/yWFqgsh2tpmpJTpTK7ejdy+4NaYWKaeWrCuSsH6QsiIVW5Lt52G/Tkk9aJZoM7XMNZLo9kj9IL3SilAQ5v0le1vcIM3uLFARL4hmbC9ml9XXyF8NkjidmJ5ZKEanIn8OYpPYlS2ASJbU7VYNMosGkaHt6wSxUYK9sqTNsU6Q/mVclqCuw6Lm4Yt9XBA7fViAWQbaubtGkFCtiZaJE8RWv9/otBgTREt7Y3DmbOJ8YnZeM4gIBjE3YbP6VT0zGyRkXEVMoU1foSD2GGOD5L01/H475Gs7tcxP9uou1OiYjlm1BhoYRBQGLxxiYZZlImukV7odYELYfZoF5FQ9UhBy+WyZ7eZJLD/ygxxHvkg8VpBERp5jFz7O/psgcWZhJG9m9VrwUEHCC4sxNki9cAfPhAnykBWxN5HdmKRZzoZWJPy08S+C2GeF9y/CPpzLsUGizPeihw3CmLw9SvOQzH2Mf/JBzKOAXvINUf43Qcx4TJDIy4cL53BPPoj5DhmviBz1iPIoQSSrVli5PEiNyUUQZ8siSGzp7j/NekHcD+SyIO29IBjEvePezmPvtS68O/OhmFx6G8rXQcM1QXh+c+t+oCNBlA3i6AWh/Hraup7uB9+imGY3U9cnRT93Nqir6XBXzWHUxP/kXWQAtHAHOr3mvSDC47/4cPjNVG8Dp0oMp5b1HNEdaCeIN3IbMxLE216+AeXc2xYfwVLK7jhoX+780r4gr4PwshNeo5EgvNq9amQimMxKFbTdkRd8KOqOpHzBHfykN4Cqjf29uZSdigw8ld2KdE/SKHzpn2O0QQZ2Emjmzsk1hjJ8DCGTzfn3NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCm+w3EIJlC6D5fEgAAAABJRU5ErkJggg=='}}/>
                <Text style={styles.signin}>Sign In</Text>
                <View>
                    <Text style={styles.title}>Email ID</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1 , width: 100}}
                        onChangeText={(empId) => this.setState({empId})}
                        value={this.state.empId}
                    />
                </View>
                <View>
                    <Text>Emp Code</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1 , width: 100}}

                    />
                </View>
                <TouchableHighlight style={styles.button}>
                    <View style={{width:150,height:30,backgroundColor:'blue',borderRadius: 5,alignItems:'center',paddingTop:5}}>
                        <Text style={{color:'white',fontSize:15}}>Sign In</Text>
                    </View>
                </TouchableHighlight>*/}
            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'red',
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        /*justifyContent: 'center',*/
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'red',
    },
    title: {
        margin: 20
    },
    signin: {
        fontSize: 60
    },
    button:{
        width: 280,
        height:50,
        borderRadius: 23,
        alignItems:'center',
        paddingTop:5,
        backgroundColor:'white',
        marginTop:50
    }
    /*paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },*/
});

function mapStateToProps (state) {
    return {
        eventLoginList: state.event.eventLoginList
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                postEvent,
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)