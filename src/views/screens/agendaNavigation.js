import React, {Component} from 'react';
import NavigationContainer from '../common/navigationContainer'

class AgendaNavigation extends Component {
    render(){
        const data = [
                        {name: 'Pre Kick-Off',nav:'PreKickOff'},
                        {name: 'Day 1',nav:'AgendaDay1',day:'Day1'},
                        {name: 'Day 2',nav:'AgendaDay1',day:'Day2'},
                        {name: 'Day 3',nav:'AgendaDay1',day:'Day3'},
                    ]
        return(            
            <NavigationContainer navigation={this.props.navigation}
                     navData={data}/>                   
                
        );
    }
}

export default AgendaNavigation;