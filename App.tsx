import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {HomeComponent} from './src/screens/Home';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeComponent />
      </SafeAreaView>
    </>
  );
};

export default App;
