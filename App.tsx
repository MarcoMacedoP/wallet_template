import 'react-native-gesture-handler';
import './shim';
import Wallet from 'erc20-wallet';
import React, {useEffect, useState} from 'react';
import Router from './src/Router';
import {useGlobalState} from 'globalState';
import {Text} from 'shared/styled-components';

//declarations
declare var global: {HermesInternal: null | {}};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [, setSeed] = useGlobalState('seed');
  const [, setToken] = useGlobalState('token');

  useEffect(() => {
    Wallet.mySeed = 'mipalabraalfanumerica8989';
    setTimeout(() => setLoading(false), 200);
    // const callSeed = async () => {
    //   const seed = await erc20.createSeed();
    //   setLoading(false);
    //   setSeed(seed);
    //   //   setToken(true);
    // };
    // callSeed();
  }, []);

  return isLoading ? <Text>Loading ...</Text> : <Router />;
};
export default App;
