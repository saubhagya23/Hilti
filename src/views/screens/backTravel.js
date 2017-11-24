import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity , Text } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome'

class BackTravel extends Component {
    render(){
        return(
            <TouchableOpacity style={styles.container} onPress={()=>this.props.props.navigation.goBack()}>
                <Icon
                    style={styles.icons}
                    name="angle-left"
                    size={20}
                />
                <Text style={styles.text}>Back | {this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:0.5,
        marginTop:10,
        flexDirection:'row',
        backgroundColor:'white'
    },
    icons:{
        marginLeft:15
    },
    text:{
        marginLeft:10
    }
});

export default BackTravel;