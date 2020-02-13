import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MnemonicScreen} from './screens/MnemonicScreen';
import {BackupScreen} from './screens/BackupScreen';

const Mnemonic = createStackNavigator();

export function MnemonicRoutes({route}) {
  return (
    <Mnemonic.Navigator
      initialRouteName="Mnemonic"
      screenOptions={{headerShown: false,}}>
      <Mnemonic.Screen name="Mnemonic" component={MnemonicScreen}/>
      <Mnemonic.Screen name="Backup" component={BackupScreen}/>
    </Mnemonic.Navigator>
  );
}
