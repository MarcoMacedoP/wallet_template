import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Toast from 'react-native-simple-toast';
import {Button, Loading} from 'shared/components';
import {
  Label,
  PageContainer,
  Subtitle,
  H4 as BaseTitle,
} from 'shared/styled-components';
import Wallet from 'erc20-wallet';

import {useGlobalState} from 'globalState';
import AsyncStorage from '@react-native-community/async-storage';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export const CreateAdressScreen = () => {
  const image = require('assets/images/agave_wallet_create.png');
  const check = require('assets/icons/check_icon.png');
  const [, setKeyStore] = useGlobalState('keystore');
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function createWallet() {
      console.log('Creating wallet...');
      try {
        await createStore();
        await createAdress();
        await encodeKeystore();
        setChecked(true);
        setKeyStore(true);
      } catch (error) {
        Toast.show(error);
      }
    }
    async function createStore() {
      Wallet.numAddr = 10;
      const keystore = await Wallet.createdStored();
      Wallet.keystore = keystore;
      console.log({keystore: true});
    }
    async function createAdress() {
      const address: [] = (await Wallet.generateAddress()) || [];
      Wallet.address = address;
      console.log({address: address.length, type: typeof address});

      await AsyncStorage.setItem('address', JSON.stringify(address));
      console.log({address: true});
    }
    async function encodeKeystore() {
      const json = await Wallet.encodeJson();
      await AsyncStorage.setItem('keystore', json);
      console.log({storaged: true});
    }
    createWallet().then(goBalance);
  }, []);
  const goBalance = () => navigation.navigate('Balance');

  return (
    <PageContainer light>
      <BodyBox>
        {checked ? (
          <CreatedContainer>
            <Image source={check} />
            <ContainerText>
              <Title>Wallet created. </Title>
              <Label>
                Please secure your mnemonic words safety. Make sure you store
                them safely and do not leak information to others
              </Label>
            </ContainerText>
          </CreatedContainer>
        ) : (
          <Loading
            image={require('assets/images/agave_wallet_create.png')}
            text="Wallet is being created, please wait a moment"
          />
        )}
      </BodyBox>
    </PageContainer>
  );
};

const BodyBox = styled.View`
  height: 100%;
  width: 100%;
`;
const CreatedContainer = styled.View`
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;
const ContainerText = styled.View`
  width: 100%;
  padding: 0 22px;
  margin-bottom: 35px;
  align-items: flex-start;
`;

const Title = styled(BaseTitle)`
  margin-bottom: 16px;
  font-size: 32px;
  position: relative;
  right: 8px;
  align-self: center;
`;
