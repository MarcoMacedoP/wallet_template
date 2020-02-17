import 'react-native-gesture-handler';
import './shim';
import Wallet from 'erc20-wallet';
import React, {useEffect, useState} from 'react';
import Router from './src/Router';
import {useGlobalState} from 'globalState';
import { Splash } from 'shared/components/Splash';
import { Animated, View } from 'react-native';
//declarations
declare var global: {HermesInternal: null | {}};

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 2,
        duration: 1000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [, setSeed] = useGlobalState('seed');
  const [, setToken] = useGlobalState('token');

  useEffect(() => {
    Wallet.mySeed = 'mipalabraalfanumerica8989';
    setTimeout(() => setLoading(false), 1000);
     const callSeed = async () => {
       const seed = await Wallet.createSeed();
       setLoading(true);
       setSeed(seed);
        //  setToken(true);
     };
     callSeed();
  }, []);

  return isLoading ? <Splash/> : 
  (
    <FadeInView style={{flex: 1}}>
      <Router />
    </FadeInView>
  );
};
export default App;
