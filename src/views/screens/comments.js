import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  moment from 'moment';

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

class Comments extends Component {

    constructor(props){
        super(props);
        this.state = {
            typing: '',
            errText:''
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

    componentDidMount(){
        const { getComments } = this.props;
        getComments();
    }

    sendMessage = async () => {
        // read message from component state
        const message = this.state.typing;
        if(message) {
            this.flatList.scrollToEnd();
            const {postComment} = this.props;
            postComment({
                payload: {
                    comment: message
                }
            });

            this.setState({
                typing: ''
            });

        }else{
            errText:'Please enter some text'
        }
    };


    render(){
        let user = JSON.parse(this.props.userDetail);
        let code = user.Code;
        let comments= this.props.commentList;
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage={`COMMENTS`} navigation={this.props.navigation}/>
                        <FlatList
                            ref={elm => this.flatList = elm}
                            data={comments}
                            renderItem={({item}) =>
                                <View style={styles.row}>
                                    {
                                    code === item.code ?
                                        <View style={styles.rowTextRight}>
                                            <View>
                                                <Text >{moment(item.timestamp).fromNow()}</Text>
                                                <Text style={styles.messageSender}>{item.comment}</Text>
                                            </View>
                                        </View>:
                                        <View style={styles.rowTextLeft}>
                                            <View style={{flexDirection:'row'}}>
                                                <View style={styles.senderImage}>
                                                    <Text style={styles.senderImageText}>{item.name[0]}</Text>
                                                </View>
                                                <Text style={styles.sender}>{item.name}</Text>
                                                <Text style={{ marginTop:10,marginLeft:100}}>{moment(item.timestamp).fromNow()}</Text>
                                            </View>

                                            <Text style={styles.message}>{item.comment}</Text>
                                        </View>
                                }

                                </View>
                            }
                            keyExtractor={item => item.timestamp}
                        />
                        <KeyboardAwareScrollView style={{paddingBottom:20}}>
                            <View >
                                <TextInput
                                    value={this.state.typing}
                                    style={styles.input}
                                    onFocus={() => {this.setState({errText:''})}}
                                    underlineColorAndroid="transparent"
                                    placeholder="Type something nice"
                                    onChangeText={text => this.setState({typing: text})}
                                />
                                <TouchableOpacity onPress={this.sendMessage}>
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
        flex: 1,
    },
    rowTextRight:{
        flex:1,
    },
    message: {
        marginLeft:50,
        fontSize: 15
    },
    messageSender:{
        fontSize:15,
        alignSelf:'flex-end'
    },
    sender: {
        marginTop:10,
        marginLeft:10,
        fontWeight: 'bold'
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
    },
    input: {
        paddingHorizontal: 20,
        fontSize: 18,
        flex: 1,
    },
    send: {
        alignSelf: 'center',
        color: '#dd2127',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20,
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



