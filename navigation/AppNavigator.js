import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../src/HomeScreen';
import FormScreen from '../src/FormScreen';
import SigninScreen from '../src/SigninScreen';
import DashBoardScreen from '../src/DashBoardScreen';

export default createAppContainer(
  createStackNavigator(
    {
      Main: createDrawerNavigator({
        Main: HomeScreen,
        SignIn: SigninScreen,
        Form: FormScreen,
        Dashboard: DashBoardScreen
      }, {
        defaultNavigationOptions: {
          header: null,
        }
      }
      )
    }, {
    defaultNavigationOptions: {
      header: null,
    }
  }
  )
);
