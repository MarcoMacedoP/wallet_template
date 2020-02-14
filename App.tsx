import 'react-native-gesture-handler';
import './shim';
import erc20 from 'erc20-wallet';
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
    const callSeed = async () => {
      const seed = await erc20.createSeed();
      setLoading(false);
      setSeed(seed);
      //   setToken(true);
    };
    callSeed();
  }, []);

  return isLoading ? <Text>Loading ...</Text> : <Router />;
};
export default App;
