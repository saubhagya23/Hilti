import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { getNotificationCount, readAllNotification} from '../../actions/apiData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class notificationBell extends Component {
    constructor(){
        super();

        this.state = {
            fontLoaded:false
        }
    }

    async componentWillMount() {
        this.getNotificationAsync()
        .then((data)=>{
            // alert(data.count);
        });
    }

    async getNotificationAsync() { 
        return this.props.getNotificationCount();
    }

    bellIconClick() { 
        // this.props.pauseVideo();
        this.props.readAllNotification().then((resp)=>{
            this.props.navigation.navigate('Notifications',{})
        })
        
    }

    render() {

        return(
            <View style={styles.notification}>
                {this.props.notificationCount.count && this.props.notificationCount.count!=0?
                <Text style={styles.notifBadge}>{this.props.notificationCount.count}</Text>:null}
                    <Icon 
                    name='bell'
                    size={20}
                    onPress={() => this.bellIconClick()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 25,
        width: 40,
        position:'absolute',
        zIndex:10
    },
    notifBadge: {
        position: 'absolute',
        color: '#fff',
        backgroundColor: 'red',
        borderRadius: 8,
        height: 16,
        width: 16,
        zIndex:15,
        padding: 1,
        fontSize: 9,
        textAlign: 'center',
        left: 5,
        top: -5,
    },
    notification: {
        position: 'relative',
        paddingHorizontal: 5,
    }
});


function mapStateToProps (state) {
    return {
        notificationCount: state.event.notificationCount
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
                getNotificationCount,
                readAllNotification
            },
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(notificationBell)