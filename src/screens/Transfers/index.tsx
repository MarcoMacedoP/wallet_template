import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransfersScreen} from './screens/TransfersScreen';
import {SendTransferScreen} from './screens/SendScreen';
import {RecieveTransferScreen} from './screens/RecieveScreen';
import {commonScreenOptions} from '../../../Router';
import {colors} from 'shared/styles';

const Transfers = createStackNavigator();

export function TransfersRoutes() {
  return (
    <Transfers.Navigator
      initialRouteName="Transfers"
      screenOptions={commonScreenOptions}>
      <Transfers.Screen
        name="home"
        component={TransfersScreen}
        options={({route}: {route: any}) => ({
          ...commonScreenOptions,
          title: route.params.currency.type,
        })}
      />
      <Transfers.Screen
        name="send"
        component={SendTransferScreen}
        options={({route}: {route: any}) => ({
          ...commonScreenOptions,
          title: `${route.params.currency.type} Send`,
          headerStyle: {
            backgroundColor: colors.whiteDark,
            shadowColor: 'transparent',
            shadowRadius: 0,
            elevation: 0,
          },
        })}
      />
      <Transfers.Screen name="recieve" component={RecieveTransferScreen} />
    </Transfers.Navigator>
  );
}
