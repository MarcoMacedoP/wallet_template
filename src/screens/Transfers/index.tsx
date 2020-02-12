import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransfersScreen} from './screens/TransfersScreen';

const Transfers = createStackNavigator();

export function TransfersRoutes({route}) {
  return (
    <Transfers.Navigator
      initialRouteName="Transfers"
      screenOptions={{header: () => null}}>
      <Transfers.Screen name="Transfers">
        {() => <TransfersScreen route={route} />}
      </Transfers.Screen>
    </Transfers.Navigator>
  );
}
