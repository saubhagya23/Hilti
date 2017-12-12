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
import Header from '../common/commentsHeader';
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
            console.log("Message: ", message);
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

    renderItem({item}) {
        console.log("item:",item);
        return (
            <View style={styles.row}>
                <View style={styles.rowText}>
                        <Text style={styles.sender}>{item.name}</Text>
                        <Text style={styles.message}>{item.comment}</Text>
                        <Text>{moment(item.timestamp).fromNow()}</Text>
                </View>
            </View>
        );
    }

    render(){
        let user = JSON.parse(this.props.userDetail);
        let code = user.Code;
        console.log(code,typeof code);
        let comments= this.props.commentList;
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage={`COMMENTS`} navigation={this.props.navigation}/>
                        <Header title={"Comments"} />
                        <FlatList
                            ref={elm => this.flatList = elm}
                            data={comments}
                            getItemLayout={(data, index) => (
                                {length: 10, offset: 10 * index, index}
                            )}
                            renderItem={({item}) =>
                                <View style={styles.row}>
                                    {
                                    code === item.code ?
                                        <View style={styles.rowTextRight}>
                                            <Text style={styles.sender}>{item.name}</Text>
                                            <Text style={styles.message}>{item.comment}</Text>
                                            <Text>{moment(item.timestamp).fromNow()}</Text>
                                        </View>:
                                        <View style={styles.rowTextLeft}>
                                            <Text style={styles.sender}>{item.name}</Text>
                                            <Text style={styles.message}>{item.comment}</Text>
                                            <Text>{moment(item.timestamp).fromNow()}</Text>
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
    avatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
        marginRight: 10,
    },
    rowTextLeft: {
        flex: 1,
    },
    rowTextRight:{
        flex:1,
        alignItems:'flex-end'
    },
    message: {
        fontSize: 18,
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10,
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




/*
    componentWillMount() {
        /!*
        subscribe(CHANNEL, messages => {
          this.setState({messages});
        });
        *!/

    }*/

