import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, Linking, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import Icon  from 'react-native-vector-icons/FontAwesome';
import Checkbox from './Checkbox';



export default class assistanceContainer extends Component {
    submit = (url) => {
        /*Submit handler*/
        console.log("url to open is :",url);
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + url);
            }
        });
    };

    constructor(){
        super();
        this.state = {
            fontLoaded:false,
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
        const mailId = 'pooja19goyal@gmail.com';
        const CheckBoxes = this.props.assistanceData.select.map((item,i)=> <Checkbox checked={false} content={item} key={i} /> )
        return (
            this.state.fontLoaded?
            <View style={styles.Container}>
                    <View style={styles.queryContainer} >
                        <Text
                            style={{
                                fontSize:22,
                                fontFamily:'hilti-roman'
                                }}>
                                {this.props.assistanceData.title}</Text>
                        <Text style={{
                                fontSize: 12,
                                textAlign:'center',
                                fontFamily:'hilti-roman',
                                marginTop: 18,
                                }}>
                                {this.props.assistanceData.desc}
                        </Text>
                    </View>
                    <View style={{flex:1}}>
                        {CheckBoxes}
                        <TouchableHighlight style={styles.button} onPress= { () => {this.submit(`mailto:${mailId}?subject=${this.props.assistanceData.title}&body=example`)}}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Image style={{marginRight:9}} source={require('../../assets/images/send_email/send_email_mpdi.png')} />
                                <Text style={{color:'#dd2127',fontSize:16, fontFamily:'hilti-roman', textAlign:'center' }}>SEND EMAIL</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
            </View>:null
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        backgroundColor:'#fff',
        flex:1,
        paddingHorizontal:32,
    },
    queryContainer: {
        flex: 0,
        flexShrink: 1,
        alignItems:'center',
        marginVertical:35.5,
    },
    checkboxText: {
        flex: 1,
        fontSize:14,
        fontFamily:'hilti-roman',
        flexWrap: 'wrap',
    },
    button:{
        height:41,
        width:194.5,
        alignSelf: 'center',
        backgroundColor:'white',
        borderColor:'#dd2127',
        borderWidth:1,
        marginTop:12,
    }
});