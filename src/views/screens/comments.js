import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  moment from 'moment';
import Icon  from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Font } from 'expo'
import { getComments, postComment } from '../../actions/apiData';
import PageHeaderNotif from "../common/pageHeaderNotif";
import openSocket from 'socket.io-client';

// const SocketEndpoint = 'http://13.68.114.98:9000/socket.io-client';
let socket;
class Comments extends Component {

    constructor(props){
        super(props);
        this.state = {
            typing: '',
            errText:'',
            isConnected: false,
            commentsList:[]
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


    componentDidMount() {
         socket = openSocket('http://13.68.114.98:9000', {
            path: '/socket.io-client'
        });

        console.ignoredYellowBox = [ 'Setting a timer' ]

        socket.on('connect', () => {
            console.log('connected!');
        });

        socket.on('error', error => {
            console.log('connected!');
        });

        socket.on('comment:findOneAndUpdate', (data) => {
            // console.log('data updated',data);
            console.log("data updated 1 :",data);
            let localComments = this.state.commentsList;
            let index =localComments.findIndex((item)=> item._id === data._id);
            if(index < 0){
                console.log("index is :",index);
                localComments.push(data);
                this.setState({
                    commentsList:localComments
                })
            }

        });

        socket.on('disconnect',()=>{
            console.log("disconnected*************")
        })

        const { getComments } = this.props;
        getComments();
    }

    componentWillReceiveProps(nextProps){

     this.setState({
         commentsList:nextProps.commentList
     })
    }

    sendMessage = async () => {
        // read message from component state
        const message = this.state.typing;
        if(message) {
            const {postComment} = this.props;
            postComment({
                payload: {
                    comment: message
                }
            });

            this.setState({
                typing: ''
            });
             this.flatList.scrollToEnd();

        }else{
            errText:'Please enter some text'
        }
    };

    disconnectSocket = () => {
        socket.disconnect();
    };


    render(){
        let user = JSON.parse(this.props.userDetail);
        let code = user.Code;
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage={`COMMENTS`} navigation={this.props.navigation} disconnectSocket={this.disconnectSocket}/>
                        <FlatList
                            ref={elm => this.flatList = elm}
                            data={this.state.commentsList}
                            renderItem={({item}) =>
                                <View style={styles.row}>
                                    {
                                    code === item.code ?
                                        <View style={styles.rowTextRight}>
                                            <View style={styles.messageContainer}>
                                                <Text style={styles.messageSender}>{item.comment}</Text>
                                                <Text style={styles.timeNotif}>{moment(item.timestamp).fromNow()}</Text>
                                            </View>
                                        </View>:
                                        <View style={styles.rowTextLeft}>
                                            <View style={styles.messageContainer}>
                                                <Text style={styles.message}>{item.comment}</Text>
                                                <View style={{flexDirection:'row', marginTop:8}}>
                                                    <Text style={styles.sender}>{item.name}</Text>
                                                    <Icon
                                                        style={{marginLeft:5,marginTop:6}}
                                                        name='circle'
                                                        size={5}
                                                    />
                                                    <Text style={{alignSelf:'flex-end', fontSize:10,marginLeft:5}}>{moment(item.timestamp).fromNow()}</Text>
                                                </View>
                                            </View>
                                        </View>
                                }

                                </View>
                            }
                            keyExtractor={item => item.timestamp}
                        />
                        <KeyboardAwareScrollView style={{paddingBottom:20}}>
                            <View style={{flexDirection:'row'}}>
                                <TextInput
                                    value={this.state.typing}
                                    style={styles.input}
                                    onFocus={() => {this.setState({errText:''})}}
                                    underlineColorAndroid="transparent"
                                    placeholder="Type something nice"
                                    onChangeText={text => this.setState({typing: text})}
                                />
                                <TouchableOpacity onPress={this.sendMessage} style={{marginLeft:10,width:70,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'lightgrey',borderRadius:5}}>
                                    <Text style={styles.send}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAwareScrollView>
                        {
                            this.state.errText?
                                <Text>{this.state.errText}</Text>:null
                        }
                    </View>
                    :null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    rowTextLeft: {
        width:200,
        borderRadius:10,
        backgroundColor:'#E2D1E8',
    },
    timeNotif:{
      alignSelf:'flex-end',
        fontSize:10,
        marginTop:8
    },
    rowTextRight:{
        justifyContent:'flex-end',
        flex:1,
        width:100,
        borderRadius:10,
        backgroundColor:'#EBE7ED',
        marginLeft:100
    },
    message: {
        fontSize: 15
    },
    messageSender:{
        fontSize:15,
    },
    sender: {
        fontWeight:'bold',
        alignSelf:'flex-end',
        fontSize:10
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
    },
    input: {
        borderWidth: 2,  // size/width of the border
        borderColor: 'lightgrey',
        paddingHorizontal: 20,
        fontSize: 18,
        width:250,
        marginLeft:10
    },
    send: {
        alignSelf: 'center',
        color: '#dd2127',
        fontSize: 16,
        fontWeight: 'bold',
        padding:10
    },
    senderImage:{
        backgroundColor:'lightblue',
        height:40,
        width:40,
        borderRadius: 40,
        alignItems:'center',
        justifyContent:'center'

    },
    senderImageText:{
        fontSize:30,
        fontWeight:'bold'
    },
    messageContainer:{
        padding:10
    }
});


function mapStateToProps (state) {
    return {
        commentList: state.event.commentList,
        userDetail: state.event.userDetail
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getComments,
                postComment
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)



