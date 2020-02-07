import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {HomeComponent} from './src/screens/Home';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeComponent />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
