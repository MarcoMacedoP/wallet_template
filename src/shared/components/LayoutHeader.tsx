import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../styles/variables';
export const LayoutHeader = (props: any) => {
  return (
    <Container>
      <Image source={require('../../assets/icons/logo_mini.png')} />
    </Container>
  );
};
const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const Title = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
