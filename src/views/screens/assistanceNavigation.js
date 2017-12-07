import React, {Component} from 'react';
import NavigationContainer from '../common/navigationContainer'

class assistanceNavigation extends Component {
    render() {
        return (
                    <NavigationContainer navigation={this.props.navigation}
                     navData={[{name: 'Travel related',nav:'TravelAssistance'},{name: 'Hotel related',nav:'HotelAssistance'}]}/>

        )
    }
}


export default assistanceNavigation;