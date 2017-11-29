import { StackNavigator } from "react-navigation";
import Main from "../views/main.js";
import Login from "../views/screens/login"
import HomeScreen from "../views/screens/homeScreen";
import TravelNavigation from "../views/screens/travelNavigation"
import AgendaNavigation from "../views/screens/agendaNavigation"
import TravelOverview from '../views/screens/travelOverview'
import AgendaDay1 from "../views/screens/agendaDay1"
import MyArrivals from "../views/screens/MyArrivals"

const routes = {
    Main:{
      screen: Main
    },
    Login:{
      screen: Login
    },
    HomeScreen:{
      screen: HomeScreen
    },
    TravelNavigation:{
        screen: TravelNavigation
    },
    TravelOverview:{
        screen:TravelOverview,
    },
    MyArrivals:{
        screen:MyArrivals,
    },
    AgendaNavigation:{
        screen: AgendaNavigation
    },

    AgendaDay1:{
        screen: AgendaDay1
    }
}


export default StackNavigator(routes,{
  initialRouteName : 'Main',
    navigationOptions :{
        header:null,
    }
})