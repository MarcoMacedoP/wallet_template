import React from 'react';
import styled from 'styled-components/native';
//components
import { Button } from 'react-native';
export const WalkthroughScreen = ({ navigation }) => {
    return (
        <Container>
            <Title>Transfer screen </Title>
            <Button title="Go home" onPress={() => navigation.push('Home')} />
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
