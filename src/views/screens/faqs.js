import React, {Component} from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import PageHeaderNotif from '../common/pageHeaderNotif'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Font } from 'expo'

export default class DosDonts extends Component {
    state = {
        fontLoaded:false
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
        return (
            <View style={styles.container}>
                {this.state.fontLoaded ?
                    <View style={{flex: 1}}>
                        <PageHeaderNotif props={this.props} parentPage={`FAQs`}/>
                        <View style={{backgroundColor:'#f5f3ee'}}>
                            <Text style={{fontFamily:'hilti-roman',fontSize:10,color:'#dd2127',marginTop:16.5,marginLeft:19}}>FAQ HILTI INDIA - KICK OFF 2017</Text>
                            <View style={{backgroundColor:'#ffffff',height:363,marginTop:16}}>
                                <ScrollView>
                                    <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                        name='circle'
                                        size={10}
                                    />
                                    <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:19.5}}>I want to make some changes in my teavel plan,whom to contact?</Text>
                                    </View>
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Icon
                                            style={{color:'#f5f3ee',marginLeft:21,marginTop:28}}
                                            name='circle'
                                            size={10}
                                        />
                                        <Text style={{color:'#000000',fontFamily:'hilti-bold',fontSize:12,marginTop:21.5,marginLeft:19.5}}>When will be my check-in at the hotel?</Text>
                                    </View>
                                    <Text style={{fontSize:12,fontFamily:'hilti-roman',marginLeft:10,marginTop:28}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                </ScrollView>
                            </View>
                        </View>
                    </View> :null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        backgroundColor:'#f5f3ee'
    },
})


