import { StackNavigator} from "react-navigation";
import Main from "../views/main.js";
import HomeScreen from "../views/screens/homeScreen";

const routes = {
    Main:{
      screen: Main
    },
    HomeScreen:{
      screen: HomeScreen,
        navigationOptions:{
          title:'Home'
        }
    },
}


export default StackNavigator(routes,{
  intialRouteName : 'Main',
  navigationOptions :{
    header:null,
  }
})