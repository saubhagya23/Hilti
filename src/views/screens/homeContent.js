import React, {Component} from 'react';
import { StyleSheet, View, Text, ImageBackground,TouchableOpacity } from 'react-native';
import { Font } from 'expo'
import Expo from 'expo'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon  from 'react-native-vector-icons/FontAwesome'

import { asyncPost,asyncGet } from '../../utils/asyncStore';
import { getVideo } from '../../actions/apiData';

class HomeContent extends Component {

    state = {
        fontLoaded:false,
        showVideo:false,
        url:'',
        status:true
    };

    async componentWillMount(){
        await Font.loadAsync({
            'hilti-bold': require('../../assets/fonts/Hilti-Bold.ttf'),
            'hilti-roman': require('../../assets/fonts/Hilti-Roman.ttf'),
        });
        this.setState({
            fontLoaded:true
        })
    }

    playVideo = async() => {
        let videoUrl = await asyncGet('video');
        if(videoUrl){
            this.setState({
                url:videoUrl,
                showVideo:true
            })
        }else {
            const {getVideo} = this.props;
             await getVideo();
                if(this.props.video && this.props.video.videoUrl){
                    await asyncPost('video', this.props.video.videoUrl);
                    this.setState({
                        url:this.props.video.videoUrl,
                        showVideo:true
                    })
                }
        }
    };

    pause=()=>{
        this.setState({
            status:!this.state.status
        })
    };

    render(){
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        {
                            this.state.showVideo ?
                                <View style={{flex:1}}>
                                <Expo.Video
                                    source={{ uri: `https://hiltistorage.blob.core.windows.net/hilti-documents/Welcome-video_AlimHirani.mp4` }}
                                    posterSource={require('../../assets/images/brandLogo.png')}
                                    rate={1.0}
                                    volume={1.0}
                                    muted={false}
                                    resizeMode="cover"
                                    shouldPlay={this.state.status}
                                    isLooping
                                    style={{ flex:1 }}
                                />
                                    {
                                        this.state.status ?
                                            <Icon name="pause" onPress={this.pause}/>:
                                            <Icon name="play" onPress={this.pause}/>
                                    }

                                </View>
                                :
                                <ImageBackground
                                    style={{flex:1, width: null, height: null}}
                                    resizeMode={'cover'}
                                    source={require('../../assets/images/homeVideoImg/homeVideoImg_hdpi.png')}
                                >
                                    <Text style={{position:'absolute',width:141.5, marginTop:32,marginLeft:19,color:'#dd2127',fontSize:14,fontFamily:'hilti-roman'}}>
                                        WELCOME MESSAGE BY GM
                                    </Text>
                                    <Text style={{position:'absolute',width:141.5, marginTop:75,marginLeft:18.5,color:'#7c294e',fontSize:10,letterSpacing:0.05,fontFamily:'hilti-bold'}}>
                                        We welcome you to be a part of our annual meet.
                                    </Text>

                                    <TouchableOpacity style={{position:'absolute',marginTop:111.5,marginLeft:19,flexDirection:'row'}} onPress={this.playVideo}>
                                    <Text style={{fontSize:9, fontFamily:'hilti-bold'}}>
                                        Watch Video
                                    </Text>
                                    <View style={{marginLeft:5}}>
                                        <Icon
                                            style={{color:'#dd2127'}}
                                            name='play-circle-o'
                                            size={10}
                                             />
                                    </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                        }
                    </View>:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex:1
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    }
});

function mapStateToProps (state) {
    return {
        video: state.event.video
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getVideo,
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent)
