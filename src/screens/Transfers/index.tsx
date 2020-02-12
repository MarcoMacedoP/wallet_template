import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransfersScreen} from './screens/TransfersScreen';
import {SendTransferScreen} from './screens/SendScreen';
import {RecieveTransferScreen} from './screens/RecieveScreen';

const Transfers = createStackNavigator();

export function TransfersRoutes() {
  return (
    <Transfers.Navigator
      initialRouteName="Transfers"
      screenOptions={{header: () => null}}>
      <Transfers.Screen name="home" component={TransfersScreen} />
      <Transfers.Screen name="send" component={SendTransferScreen} />
      <Transfers.Screen name="recieve" component={RecieveTransferScreen} />
    </Transfers.Navigator>
  );
}
