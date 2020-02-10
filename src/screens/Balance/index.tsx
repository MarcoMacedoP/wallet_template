import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {BalanceHeaderComponent} from './components/Header';
import {BalanceCurrencyComponent} from './components/Currency';

const CURRENCYS: Array<{
  value: number;
  type: 'BTC' | 'AGVC';
  name: string;
}> = [
  {
    type: 'BTC',
    value: 0.0,
    name: 'Bitcoin',
  },
  {
    name: 'Agave coin',
    type: 'AGVC',
    value: 0.0,
  },
];

export const BalanceScreen = ({navigation, currencys = CURRENCYS}) => {
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
        {currencys.map((currency, index) => (
          <BalanceCurrencyComponent
            type={currency.type}
            value={currency.value}
            key={index}
            name={currency.name}
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
