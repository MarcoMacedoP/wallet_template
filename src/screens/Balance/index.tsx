import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {BalanceHeaderComponent} from './components/Header';
import {BalanceCurrencyComponent} from './components/Currency';
import {CurrencyType} from 'shared/types';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const CURRENCYS: Array<CurrencyType> = [
  {
    name: 'Agave coin',
    type: 'AGVC',
    value: '0.00',
    image: 'assets/icons/agave_coin_icon.png',
  },
  {
    type: 'ETH',
    value: '0.00',
    name: 'Ethereum',
    image: 'assets/icons/ethereum_icon.png',
  },
];

export const BalanceScreen = ({navigation, currencys = CURRENCYS}) => {
  const handleCurrencyClick = currency =>
    navigation.navigate('Transfers', {screen: 'home', params: {currency}});

  const goNotifications = () => {
    navigation.navigate('Notifications');
  }
  // useEffect(() => {
  //   navigation.navigate('Transfers', {screen: 'address'});
  // }, [])

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <>
      <GestureRecognizer
        onSwipeDown={goNotifications}
        onSwipeRight={goNotifications}
        config={config}
        style={{
          flex: 1,
        }}>
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
      </GestureRecognizer>
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
