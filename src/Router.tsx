import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React, {useEffect} from 'react';
//screens
import {WalkthroughScreen} from 'screens/Walkthrough';
import {BalanceScreen} from 'screens/Balance';
import {TransfersRoutes} from 'screens/Transfers';
import {MnemonicRoutes} from 'screens/Mnemonic';
import {TermsScreen} from 'screens/Terms';

import {LayoutHeader} from 'shared/components/LayoutHeader';
import {StatusBar} from 'react-native';
import {NotificationsScreen} from 'screens/Notifications/Notifications';
import {CreateScreen} from 'screens/Create';
import {LoadingScreen} from 'screens/Loading';

import {colors} from 'shared/styles/variables';
import {useGlobalState} from 'globalState';
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

export const commonScreenOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {fontSize: 24, fontWeight: 'bold', color: colors.black},
  headerStyle: {elevation: 0, backgroundColor: colors.white},
};

const Router = () => {
  const [token] = useGlobalState('token');

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Navigator screenOptions={commonScreenOptions} mode="card">
          {token ? (
            <Screen
              name="Balance"
              component={BalanceScreen}
              options={balanceOptions}
            />
          ) : (
            <Screen
              name="Walkthrough"
              component={WalkthroughScreen}
              options={walkthroughOptions}
            />
          )}
          <Screen
            name="Transfers"
            component={TransfersRoutes}
            options={{headerShown: false}}
          />

          <Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              title: 'Notification Center',
              gestureDirection: 'horizontal-inverted',
            }}
          />

          <Screen
            name="Terms"
            component={TermsScreen}
            options={{
              title: 'User service Agreement',
              headerBackTitleVisible: false,
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
              headerBackTitleVisible: false,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: 'normal',
              },
            })}
          />
          <Screen
            name="Loading"
            component={LoadingScreen}
            options={({route}: {route: any}) => ({
              title: 'Create Wallet',
              headerBackTitleVisible: false,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: 'normal',
              },
            })}
          />
          <Screen
            name="Mnemonic"
            component={MnemonicRoutes}
            options={{
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: 'normal',
              },
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

const Routes = ({token}) => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log({token});
    if (token) {
      navigation.navigate('Home');
    }
  }, [token]);
  return <></>;
};

export default Router;
