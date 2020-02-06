import React from 'react';
import styled from 'styled-components/native';

export const HomeComponent = () => {
  return (
    <Container>
      <Title> Hello, world 👨‍🌾</Title>
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
