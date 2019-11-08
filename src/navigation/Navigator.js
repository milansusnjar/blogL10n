import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {SplashScreen, MainScreen, SettingsScreen} from '../screens';

const MainNavigator = createStackNavigator(
  {
    Main: {screen: MainScreen},
    Settings: {screen: SettingsScreen},
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: {screen: SplashScreen},
    Main: {screen: MainNavigator},
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
