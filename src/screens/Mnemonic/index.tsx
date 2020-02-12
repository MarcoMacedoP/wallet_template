import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MnemonicScreen} from './screens/MnemonicScreen';

const Mnemonic = createStackNavigator();

export function MnemonicRoutes({route}) {
  return (
    <Mnemonic.Navigator
      initialRouteName="Mnemonic"
      screenOptions={{header: () => null}}>
      <Mnemonic.Screen name="Mnemonic" component={MnemonicScreen}/>
    </Mnemonic.Navigator>
  );
}
