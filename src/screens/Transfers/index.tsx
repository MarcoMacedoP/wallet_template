import React from 'react';
import styled from 'styled-components/native';
//components
import {Button} from 'react-native';

export const TransfersScreen = ({navigation, route}) => {
  const amount = '0.00';
  const {currency} = route.params;
  console.log(currency);

  return (
    <Container>
      <Title>{amount}</Title>
    </Container>
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
`;
