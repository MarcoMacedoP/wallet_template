import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import React from 'react';
//screens
import {WalkthroughScreen} from './src/screens/Walkthrough';
import {BalanceScreen} from './src/screens/Balance';
import {TransfersScreen} from './src/screens/Transfers';
import {colors} from './src/shared/styles/variables';
import {Image} from 'react-native';

//declarations
declare var global: {HermesInternal: null | {}};
const {Navigator, Screen} = createStackNavigator();

const balanceOptions: StackNavigationOptions = {
  title: 'Wallet',
  headerTitleAlign: 'center',
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTransparent: true,
  // headerLeft: <Image source={require('./src/assets/icons/logo_mini.png')} />,
};

const walkthroughOptions: StackNavigationOptions = {
  title: 'Wallet',
  headerTitleAlign: 'center',
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTransparent: true,
};

const commonOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  animationTypeForReplace: 'push',
};
const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Walkthrough" screenOptions={commonOptions}>
        <Screen
          name="Home"
          component={BalanceScreen}
          options={balanceOptions}
        />
        <Screen name="Transfers" component={TransfersScreen} />
        <Screen
          name="Walkthrough"
          component={WalkthroughScreen}
          options={walkthroughOptions}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
