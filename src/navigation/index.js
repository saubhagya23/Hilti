import { StackNavigator } from "react-navigation";
import Main from "../views/main.js";
import Login from "../views/screens/login"
import HomeScreen from "../views/screens/homeScreen";
import TravelNavigation from "../views/screens/travelNavigation"
import TravelOverview from '../views/screens/travelOverview'
import Agenda from "../views/screens/agenda"

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
    Agenda:{
        screen: Agenda
    }
}


export default StackNavigator(routes,{
  initialRouteName : 'Main',
    navigationOptions :{
        header:null,
    }
})