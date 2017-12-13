import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { Font } from 'expo'
import PageHeaderNotif from "../common/pageHeaderNotif";

class AdminComment extends Component {

    constructor(props){
        super(props);
        this.state={
            fontLoaded:false
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


    render(){
        console.log(this.props)
        return(
            <View style={styles.container}>
                {this.state.fontLoaded?
                    <View style={{flex:1}}>
                        <PageHeaderNotif props={this.props} parentPage={`COMMENTS`} navigation={this.props.navigation}/>
                        <TouchableOpacity style={{backgroundColor:'yellow'}} onPress={()=>this.props.navigation.navigate('Comments',{})}>
                            <Text>Post comment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Approve comment</Text>
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
    }
});


export default AdminComment


