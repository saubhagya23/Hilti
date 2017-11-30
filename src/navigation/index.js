import { StackNavigator } from "react-navigation";
import Main from "../views/main.js";
import Login from "../views/screens/login"
import HomeScreen from "../views/screens/homeScreen";
import TravelNavigation from "../views/screens/travelNavigation"
import AgendaNavigation from "../views/screens/agendaNavigation"
import TravelOverview from '../views/screens/travelOverview'
import AgendaDay1 from "../views/screens/agendaDay"
import MyArrivals from "../views/screens/myArrivals"
import MyDeparture from '../views/screens/myDeparture'
import VenueNavigation from '../views/screens/venueNavigation'
import Venue from '../views/screens/venue'
import VenueLayout from '../views/screens/venueLayout'

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
    MyDeparture:{
        screen:MyDeparture,
    },
    AgendaNavigation:{
        screen: AgendaNavigation
    },
    AgendaDay1:{
        screen: AgendaDay1
    },
    VenueNavigation:{
        screen: VenueNavigation
    },
    Venue:{
        screen:Venue
    },
    VenueLayout:{
        screen: VenueLayout
    }
}


export default StackNavigator(routes,{
  initialRouteName : 'Main',
    navigationOptions :{
        header:null,
    }
})