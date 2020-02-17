import 'react-native-gesture-handler';
import './shim';
import Wallet from 'erc20-wallet';
import React, {useEffect, useState} from 'react';
import Router from './src/Router';
import {useGlobalState} from 'globalState';
import {Splash} from 'shared/components/Splash';
import {Animated, View, ScrollView} from 'react-native';
import {useFindWalletInStorage} from 'shared/hooks/useFindWalletInStorage';
//declarations
declare var global: {HermesInternal: null | {}};
Wallet.mySeed = 'mipalabraalfanumerica8989';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 2,
      duration: 1000,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const App = () => {
  const {isLoading} = useFindWalletInStorage();

  return isLoading ? (
    <Splash />
  ) : (
    <FadeInView style={{flex: 1}}>
      <Router />
    </FadeInView>
  );
};
export default App;
