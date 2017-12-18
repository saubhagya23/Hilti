import React, {Component} from 'react';
import NavigationContainer from '../common/navigationContainer'

class AgendaNavigation extends Component {
    render(){
        const data = [
                        {name: 'Pre Kick-Off',nav:'PreKickOff'},
                        {name: 'Day 1',nav:'AgendaDay1',day:'8 Jan 18'},
                        {name: 'Day 2',nav:'AgendaDay1',day:'9 Jan 18'},
                        {name: 'Day 3',nav:'AgendaDay1',day:'10 Jan 18'},
                    ]
        return(            
            <NavigationContainer navigation={this.props.navigation}
                     navData={data}/>                   
                
        );
    }
}

export default AgendaNavigation;