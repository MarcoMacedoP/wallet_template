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
import {TermsScreen} from './src/screens/Terms';

import {colors} from './src/shared/styles/variables';
import {LayoutHeader} from './src/shared/components/LayoutHeader';
import {SafeAreaView, View} from 'react-native';
import {NotificationsScreen} from './src/screens/Notifications/Notifications';

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
  headerTitle: props => <LayoutHeader {...props} />,
  headerBackTitleVisible: false,
  headerLeft: null,
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const walkthroughOptions: StackNavigationOptions = {
  headerShown: false,
};

const commonOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  animationTypeForReplace: 'push',
  headerTitleStyle: {fontSize: 24, fontWeight: 'bold', color: colors.black},
};
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Walkthrough" screenOptions={commonOptions} mode="card">
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
          <Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{title: 'Notification Center'}}
          />
          <Screen
            name="Terms"
            component={TermsScreen}
            options={{
              title: 'User service Agreement',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: 'normal',
              },
              transitionSpec: {
                open: config,
                close: config,
              },
              gestureEnabled: true,
              gestureResponseDistance: 'horizontal',
              gestureDirection: 'vertical-inverted'
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
