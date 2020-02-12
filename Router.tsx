import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import React from 'react';
//screens
import {WalkthroughScreen} from 'screens/Walkthrough';
import {BalanceScreen} from 'screens/Balance';
import {TransfersRoutes} from 'screens/Transfers';
import {TermsScreen} from 'screens/Terms';

import {colors} from 'shared/styles/variables';
import {LayoutHeader} from 'shared/components/LayoutHeader';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {NotificationsScreen} from 'screens/Notifications/Notifications';
import {CreateScreen} from 'screens/Create';

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

let token = '';
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
          initialRouteName="Balance"
          screenOptions={commonOptions}
          mode="card">
          <Screen
            name="Home"
            component={BalanceScreen}
            options={balanceOptions}
          />
          <Screen name="Transfers" component={TransfersRoutes} />
          <Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{title: 'Notification Center'}}
          />
          <Screen
            name="Walkthrough"
            component={WalkthroughScreen}
            options={walkthroughOptions}
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
            }}
          />
          <Screen
            name="Create"
            component={CreateScreen}
            options={({route}: {route: any}) => ({
              title: route.params.name,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: 'normal',
              },
            })}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
