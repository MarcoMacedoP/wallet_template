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
import {SafeAreaView, View, StatusBar} from 'react-native';
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

const walkthroughOptions: StackNavigationOptions = {
  headerShown: false,
};

const commonOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  animationTypeForReplace: 'push',
  headerTitleStyle: {fontSize: 24, fontWeight: 'bold', color: colors.black},
  headerStyle: {elevation: 0, backgroundColor: colors.white},
};
const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Navigator
          initialRouteName="Walkthrough"
          screenOptions={commonOptions}
          mode="card">
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
              gestureEnabled: true,
              gestureResponseDistance: 'vertical-inverted',
              gestureDirection: 'vertical-inverted',
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
