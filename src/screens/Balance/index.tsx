import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import {BalanceHeaderComponent} from './components/Header';

export const BalanceScreen = ({navigation}) => {
  return (
    <>
      <BalanceHeaderComponent assets="0.00" />
      <Button
        title="Go tranfers"
        onPress={() => navigation.push('Transfers')}
      />
    </>
  );
};

const Container = styled.View`
  padding: 22px;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`;
