import React, {Component} from 'react';
import NavigationContainer from '../common/navigationContainer'

class AgendaNavigation extends Component {
    render(){
        const data = [
                        {name: 'Pre Kick-Off',nav:'PreKickOff'},
                        {name: 'Day 1',nav:'AgendaDay1'},
                        {name: 'Day 2',nav:'AgendaDay2'},
                        {name: 'Day 3',nav:'AgendaDay3'},
                    ]
        return(            
            <NavigationContainer navigation={this.props.navigation}
                     navData={data}/>                   
                
        );
    }
}

export default AgendaNavigation;