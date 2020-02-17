import AsyncStorage from '@react-native-community/async-storage';
import {useEffect, useState} from 'react';
import {useGlobalState} from 'globalState';
import Wallet from 'erc20-wallet';

/**
 * Custom hook for checking if mobile storage has already a wallet created;
 *  Connects to global state and then loads there the keystore.
 *
 */
export function useFindWalletInStorage() {
  const [isLoading, setLoading] = useState(false);
  const [, setKeystore] = useGlobalState<any>('keystore');
  useEffect(() => {
    setLoading(true);
    async function getWallet() {
      try {
        const keystore = await getDecodedWallet();
        console.log({keystore});
        setKeystore(keystore);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setKeystore(null);
      }
    }
    getWallet();
  }, []);
  return {isLoading};
}
async function getDecodedWallet() {
  const decodedKeystore = await AsyncStorage.getItem('keystore');
  Wallet.keystoreJson = JSON.parse(decodedKeystore);
  try {
    const undecodedKeystore = await Wallet.decodeJson();
    Wallet.keystore = undecodedKeystore;
    return undecodedKeystore;
  } catch (error) {}
}
