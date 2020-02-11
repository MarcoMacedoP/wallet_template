import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {BalanceHeaderComponent} from './components/Header';
import {BalanceCurrencyComponent} from './components/Currency';
import {CurrencyType} from '../../shared/types/currency';

const CURRENCYS: Array<CurrencyType> = [
  {
    type: 'BTC',
    value: '0.00',
    name: 'Bitcoin',
  },
  {
    name: 'Agave coin',
    type: 'AGVC',
    value: '0.00',
  },
];

export const BalanceScreen = ({navigation, currencys = CURRENCYS}) => {
  const handleCurrencyClick = currency =>
    navigation.navigate('Transfers', {currency});

  return (
    <>
      <BalanceHeaderComponent assets="0.00" />
      <CurrencysContainer>
        {currencys.map((currency, index) => (
          <BalanceCurrencyComponent
            currency={currency}
            key={index}
            onClick={() => handleCurrencyClick(currency)}
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
