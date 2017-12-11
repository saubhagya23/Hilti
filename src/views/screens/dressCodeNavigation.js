import React, {Component} from 'react';
import NavigationContainer from '../common/navigationContainer'

class DressCodeNavigation extends Component {
    render(){
        const data = [
                        {name: 'DAY 1',nav:'DressCodeDay'},
                        {name: 'DAY 2',nav:'DressCodeDay'},
                        {name: 'DAY 3',nav:'DressCodeDay'},
                    ];
        return(            
            <NavigationContainer navigation={this.props.navigation}
                     navData={data}/>                   
                
        );
    }
}

export default DressCodeNavigation;