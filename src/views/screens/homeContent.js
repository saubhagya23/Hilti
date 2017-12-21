import React, {Component} from 'react';
import { StyleSheet, View, Text, ImageBackground,TouchableOpacity } from 'react-native';
import { Font } from 'expo'
import Expo from 'expo'
import { FileSystem } from 'expo'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon  from 'react-native-vector-icons/FontAwesome'
import {asyncPost, asyncGet} from '../../utils/asyncStore';
import { getVideo } from '../../actions/apiData';
import * as Progress from 'react-native-progress';

class HomeContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded:false,
            showVideo:false,
            url:null,
            localURL:'',
            video:'',
            appIsReady:false,
            downloadProgress: 0,
            shouldPlay: false
        };
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

    playVideo = async() => {
        let videoUrl = await asyncGet('localURL');
        if(videoUrl){
            this.setState({
                url:videoUrl,
                showVideo:true,
                downloadProgress: 2,
                shouldPlay: true
            })
        }else {
            const {getVideo} = this.props;
             await getVideo();
             this.setState({ showVideo:true })

            const downloadResumable = FileSystem.createDownloadResumable(
                this.props.video.videoUrl,
                FileSystem.documentDirectory + 'small.mp4',
                {},
                this.callback
            )

            try {
                const { uri } = await downloadResumable.downloadAsync();
                await asyncPost('localURL', uri);
                this.setState({ url:uri, showVideo:true});
            } catch (e) {
                console.error(e);
            }
        }

    };
    callback = downloadProgress => {
        const progress =
          downloadProgress.totalBytesWritten /
          downloadProgress.totalBytesExpectedToWrite;
        this.setState({
          downloadProgress: progress,
        });
      };

      _onPlaybackStatusUpdate = playbackStatus => {
          if (!playbackStatus.isPlaying) {
              this.setState({shouldPlay: true})
          }
      }
      _handlePlayback = playbackStatus => {
        if(playbackStatus.didJustFinish) {
            this.setState({showVideo: false})
        }
      }


    render(){

        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        {
                            this.state.showVideo ?
                                <View style={{flex:1}}>
                                    {
                                        this.state.downloadProgress >= 1 ? (
                                            <Expo.Video
                                                ref={this.props._handleVideoRef}
                                                source={{uri:`${this.state.url}`}}
                                                rate={1.0}
                                                volume={1.0}
                                                muted={false}
                                                resizeMode="stretch"
                                                shouldPlay={this.state.shouldPlay}
                                                isLooping={false}
                                                useNativeControls={true}
                                                style={{flex:1}}
                                                onLoad={this._onPlaybackStatusUpdate}
                                                onPlaybackStatusUpdate = {this._handlePlayback}
                                            />) : 
                                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                <Progress.Circle progress={this.state.downloadProgress} size={60} color='#dd2127' showsText={true}/>
                                            </View>
                                            
                                    }
                                </View>
                                :
                                <TouchableOpacity onPress={this.playVideo} style={{flex:1}}>
                                <ImageBackground
                                    style={{flex:1, width: null, height: null}}
                                    resizeMode={'cover'}
                                    source={require('../../assets/images/homeVideoImg/homeVideoImg_mdpi.jpg')}
                                >
                                    <Text style={{position:'absolute',width:141.5, marginTop:32,marginLeft:19,color:'#dd2127',fontSize:14,fontFamily:'hilti-roman'}}>
                                        WELCOME MESSAGE BY GM
                                    </Text>
                                    <Text style={{position:'absolute',width:141.5, marginTop:75,marginLeft:18.5,color:'#7c294e',fontSize:10,letterSpacing:0.05,fontFamily:'hilti-bold'}}>
                                        We welcome you to be a part of our annual meet.
                                    </Text>

                                    <View style={{position:'absolute',marginTop:111.5,marginLeft:19,flexDirection:'row'}} >
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
                                    </View>
                                </ImageBackground>
                                </TouchableOpacity>
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
