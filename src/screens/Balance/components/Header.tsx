import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../shared/styles/variables';
import LinearGradient from 'react-native-linear-gradient';

type BalanceHeaderComponentProps = {
  assets: string;
};

export const BalanceHeaderComponent: React.FC<BalanceHeaderComponentProps> = ({
  assets,
}) => {
  return (
    <Container
      colors={[colors.primaryLigth, colors.primary, colors.primaryDark]}>
      <AssetsContainer>
        <Title>{assets}</Title>
        <SmallText>$</SmallText>
      </AssetsContainer>
    </Container>
  );
};
const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  height: 40%;
  margin-bottom: 16px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;
const AssetsContainer = styled.View`
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const Title = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: ${colors.white};
  margin: 0 8px;
`;
const SmallText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: bold;
  position: relative;
  top: 14px;
`;
