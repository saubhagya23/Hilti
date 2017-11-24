import { StackNavigator} from "react-navigation";
import Main from "../views/main.js";
import HomeScreen from "../views/screens/homeScreen";
import TravelNavigation from "../views/screens/travelNavigation"
import TravelOverview from '../views/screens/travelOverview'
import MyArrivals from '../views/screens/myArrivals'

const routes = {
    Main:{
      screen: Main
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
        screen:MyArrivals
    }
}


export default StackNavigator(routes,{
  initialRouteName : 'Main',
    navigationOptions :{
        header:null,
    }
})