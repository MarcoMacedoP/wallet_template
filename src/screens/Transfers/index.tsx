import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {TransfersScreen} from './screens/TransfersScreen';
import {SendTransferScreen} from './screens/SendScreen';
import {RecieveTransferScreen} from './screens/RecieveScreen';
import {commonScreenOptions} from 'Router';
import {colors} from 'shared/styles';
import {useGlobalState} from 'globalState';
import {LayoutHeader} from 'shared/components/LayoutHeader';

const Transfers = createStackNavigator();

const balanceOptions: StackNavigationOptions = {
  title: 'Wallet',
  headerTitleAlign: 'center',
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTransparent: true,
  headerTitle: props => <LayoutHeader {...props} light={true} title={'Send'} />,
  headerBackTitleVisible: false,
  headerLeft: null,
};

const recieveOptions: StackNavigationOptions = {
  title: 'Wallet',
  headerTitleAlign: 'center',
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTransparent: true,
  headerTitle: () => (
    <LayoutHeader light={true} title={'Receive'} titleColor={'white'} />
  ),
  headerBackTitleVisible: false,
  headerLeft: null,
};

export function TransfersRoutes() {
  return (
    <Transfers.Navigator
      initialRouteName="Transfers"
      screenOptions={commonScreenOptions}>
      <Transfers.Screen
        name="home"
        component={TransfersScreen}
        options={balanceOptions}
      />
      <Transfers.Screen
        name="send"
        component={SendTransferScreen}
        options={({route}: {route: any}) => ({
          ...commonScreenOptions,
          title: `${route.params.currency.type} Send`,
          // headerShown: false,
          headerStyle: {
            backgroundColor: colors.whiteDark,
            shadowColor: 'transparent',
            shadowRadius: 0,
            elevation: 0,
          },
        })}
      />
      <Transfers.Screen
        name="recieve"
        component={RecieveTransferScreen}
        options={recieveOptions}
      />
    </Transfers.Navigator>
  );
}
