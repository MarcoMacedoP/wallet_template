import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Toast from 'react-native-simple-toast';
import {Button} from 'shared/components';
import {
  Title as BaseTitle,
  Label,
  PageContainer,
  Subtitle,
  H4,
} from 'shared/styled-components';
import Wallet from 'erc20-wallet';

import {UIActivityIndicator} from 'react-native-indicators';
import {useGlobalState} from 'globalState';
import AsyncStorage from '@react-native-community/async-storage';

export const CreateAdressScreen = ({navigation}) => {
  const image = require('assets/images/agave_wallet_create.png');
  const check = require('assets/icons/check_icon.png');
  const [, setKeyStore] = useGlobalState('keystore');
  const [checked, setChecked] = useState(false);

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
      const keystore = await Wallet.createdStored();
      Wallet.keystore = keystore;
      console.log({keystore: true});
    }
    async function createAdress() {
      Wallet.numAddr = 100;
      const address = await Wallet.generateAddress();
      Wallet.address = address;
      console.log({address: true});
    }
    async function encodeKeystore() {
      const json = await Wallet.encodeJson();
      await AsyncStorage.setItem('keystore', json);
      console.log({storaged: true});
    }
    createWallet();
  }, []);

  const goHome = () => {
    console.log('Go balance');

    navigation.push('Balance');
  };

  return (
    <PageContainer light>
      <BodyBox>
        {checked ? (
          <>
            <ContainerText>
              <Title>Wallet created. </Title>
              <Label>
                Please secure your mnemonic words safety. Make sure you store
                them safely and do not leak information to others
              </Label>
            </ContainerText>

            <ContainerButtons>
              <Button onClick={goHome} accent>
                Done
              </Button>
            </ContainerButtons>
          </>
        ) : (
          <>
            <ContainerText>
              <Label>Wallet is being created, please wait a moment</Label>
            </ContainerText>
            <ContainerButtons>
              <UIActivityIndicator size={50} color="#65DDB9" />
            </ContainerButtons>
          </>
        )}
      </BodyBox>
    </PageContainer>
  );
};
const Title = styled(BaseTitle)`
  margin-bottom: 16px;
  font-size: 32px;
  position: relative;
  right: 8px;
`;
const BodyBox = styled.ScrollView`
  height: 100%;
  width: 100%;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
const ImageBox = styled.View`
  width: 30%;
  height: 20%;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const ContainerText = styled.View`
  width: 100%;
  padding-left: 8px;
  margin-bottom: 35px;
  align-items: flex-start;
`;
const ContainerButtons = styled.View`
  width: 100%;
  align-items: center;
`;
