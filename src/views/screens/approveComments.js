import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, FlatList ,TouchableOpacity } from 'react-native';
import { Font } from 'expo'

import { getUnapprovedComments ,approveComment } from '../../actions/apiData';
import PageHeaderNotif from "../common/pageHeaderNotif";
import ApproveCheckbox from '../common/approveCheckbox';
class ApproveComments extends Component {

    constructor(props){
        super(props);
        this.state = {
            typing: '',
            errText:'',
            checked: {},
            commentObj:{}
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
        const { getUnapprovedComments } = this.props;
        getUnapprovedComments();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps) {
            console.log("nextProps in cwrp[approveComments]", nextProps.unapprovedCommentList);
            let localObj ={};
            for(let i = 0 ;i<nextProps.unapprovedCommentList.length;i++){
                localObj[nextProps.unapprovedCommentList[i]._id]=false;

            }
            this.setState({
                commentObj : localObj
            });
            console.log("localObj is:",localObj);
        }

    }

    checked = (index,state) => {
        let newob  = Object.assign({},this.state.checked,{[index]:state});
        this.setState({checked: newob})
    };

    approveAllComments = () => {
        //todo: approve all comments

        let tempArray =[];
        let newOb = JSON.parse(JSON.stringify(this.state.commentObj));
            for(let key in newOb){
                newOb[key]=true;
                tempArray.push(key);
            }
        if(tempArray) {
            const {approveComment} = this.props;
            approveComment({
                payload: {
                    ids: tempArray
                }
            });
        }
            this.setState({commentObj:newOb});
    };

    approveComments = () => {
        let tempArray = [];
        for(let key in this.state.checked) {
            if(this.state.checked[key])
                tempArray.push(key);
        }
        if(tempArray) {
            const {approveComment} = this.props;
            approveComment({
                payload: {
                    ids: tempArray
                }
            });
        }else{
            this.setState({
                errText:'First select Comments'
            })
        }

    };

    render(){
        let comments= this.props.unapprovedCommentList;
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage={`Approve Comments`} navigation={this.props.navigation}/>
                        <FlatList
                            data={comments}
                            renderItem={({item}) =>
                                <View style={styles.row}>
                                    <ApproveCheckbox item={item} checked={this.checked} commentObj={this.state.commentObj}/>
                                </View>
                            }
                            keyExtractor={item => item.timestamp}
                        />
                        <TouchableOpacity onPress={this.approveComments}>
                            <Text style={styles.approve}>Approve</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.approveAllComments}>
                            <Text style={styles.approve}>Approve All</Text>
                        </TouchableOpacity>
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
    message: {
        marginLeft:50,
        fontSize: 15
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
    approve: {
        alignSelf: 'center',
        color: '#dd2127',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20,
    },
});


function mapStateToProps (state) {
    return {
        unapprovedCommentList: state.event.unapprovedCommentList,
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getUnapprovedComments,
                approveComment
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveComments)

