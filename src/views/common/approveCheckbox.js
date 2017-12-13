import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import Icon  from 'react-native-vector-icons/FontAwesome';
import  moment from 'moment';

export default class ApproveCheckbox extends Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded:false,
            check: false
        }
    }

    async componentWillMount(){
        await Font.loadAsync({
            'hilti-bold': require('../../assets/fonts/Hilti-Bold.ttf'),
            'hilti-roman': require('../../assets/fonts/Hilti-Roman.ttf'),
        });
        this.setState({
            fontLoaded:true,
        })
    }

    handleChange=()=>{
        // this.props.selecteHandler(this.props.idx);
        this.setState ({check: !this.state.check},() => {
            this.props.checked(this.props.item._id,this.state.check);
        })

    }

    render() {
        const unchecked = <Icon name='square-o' size={20} color='#000' style={{marginRight: 14}}/>
        const checked = <Icon name='check-square-o' size={20} color='#dd2127' style={{marginRight: 14}}/>
        return (
            this.state.fontLoaded?
                <TouchableOpacity style={styles.checkbox} onPress={()=>this.handleChange()}>
                    {this.state.check?checked:unchecked}
                    <View style={styles.rowTextLeft}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.senderImage}>
                                <Text style={styles.senderImageText}>{this.props.item.name[0]}</Text>
                            </View>
                            <Text style={styles.sender}>{this.props.item.name}</Text>
                            <Text style={{ marginTop:10,marginLeft:100}}>{moment(this.props.item.timestamp).fromNow()}</Text>
                        </View>

                        <Text style={styles.message}>{this.props.item.comment}</Text>
                    </View>
                    {/*<Text style={styles.checkboxText}>{this.props.content}</Text>*/}
                </TouchableOpacity>:null
        )
    }
}
const styles = StyleSheet.create({
    checkbox: {
        // marginBottom:11.5,
        // flexDirection: 'row',
        // paddingVertical: 5
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