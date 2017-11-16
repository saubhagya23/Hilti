import { StackNavigator} from "react-navigation";
import Main from "../views/main.js";

const routes = {
  Main:{
    screen: Main
  }
}


export default StackNavigator(routes,{
  intialRouteName : 'Main',
  navigationOptions :{
    header:null,
  }
})