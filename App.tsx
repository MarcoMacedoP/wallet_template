import 'react-native-gesture-handler';
import './shim';
import erc20 from 'erc20-wallet';
import React, {useEffect} from 'react';
import Router from './src/Router';
import {useGlobalState} from 'globalState';

//declarations
declare var global: {HermesInternal: null | {}};

const App = () => {
  const [, setSeed] = useGlobalState('seed');
  const [, setToken] = useGlobalState('token');

  useEffect(() => {
    const callSeed = async () => {
      const seed = await erc20.createSeed();
      setSeed(seed);
      setToken(true);
    };
    callSeed();
  }, []);

  return <Router />;
};
export default App;
