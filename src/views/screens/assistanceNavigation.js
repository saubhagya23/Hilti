import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import PageHeaderNotif from '../common/pageHeaderNotif';
import AssistanceContainer from '../common/assistanceContainer';
import NavigationContainer from '../common/navigationContainer'

class assistanceNavigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <NavigationContainer navigation={this.props.navigation}
                     navData={[{name: 'Travel related',nav:'TravelAssistance'},{name: 'Hotel related',nav:'HotelAssistance'}]}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

export default assistanceNavigation;