import {useGlobalState} from 'globalState';
import Wallet from 'erc20-wallet';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export function useCreateWallet() {
  const [, setKeyStore] = useGlobalState('keystore');
  const [isCreated, setIsCreated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function createWallet() {
      console.log('Creating wallet...');
      try {
        const keystore = await createKeystore();
        await createAddress();
        await encodeKeystore();
        setKeyStore(keystore);
        setIsCreated(true);
        setError(null);
      } catch (error) {
        setIsCreated(false);
        setError(error);
      }
    }
    createWallet();
  }, []);

  return {error, isCreated};
}
async function createKeystore() {
  Wallet.numAddr = 10;
  const keystore = await Wallet.createdStored();
  Wallet.keystore = keystore;
  console.log({keystore: true});
  return keystore;
}
async function createAddress() {
  const address = await Wallet.generateAddress();
  Wallet.address = address;
  await AsyncStorage.setItem('addresses', JSON.stringify(address));
  await AsyncStorage.setItem('mainAddress', JSON.stringify(address[0]));
  console.log({address: true});
}
async function encodeKeystore() {
  const json = await Wallet.encodeJson();
  await AsyncStorage.setItem('keystore', json);
  console.log({storaged: true});
}
