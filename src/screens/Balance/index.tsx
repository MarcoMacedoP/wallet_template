import React from 'react';
import styled from 'styled-components/native';
import {Button, StatusBar} from 'react-native';
import {BalanceHeaderComponent} from './components/Header';
import {BalanceCurrencyComponent} from './components/Currency';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../shared/styles/variables';

export const BalanceScreen = ({navigation, currencys = [1, 2]}) => {
  const handleCurrencyClick = () => navigation.push('Transfers');

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <BalanceHeaderComponent assets="0.00" />
      <CurrencysContainer>
        {currencys.map(currency => (
          <BalanceCurrencyComponent
            key={currency}
            onClick={handleCurrencyClick}
          />
        ))}
      </CurrencysContainer>
    </>
  );
};

const CurrencysContainer = styled.View`
  padding: 22px;
  width: 100%;
  justify-content: center;
  position: relative;
  top: -70px;
`;
const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`;
