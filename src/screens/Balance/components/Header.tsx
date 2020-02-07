import React from 'react';
import styled from 'styled-components/native';
import {colors, borderRadius} from '../../../shared/styles/variables';
import LinearGradient from 'react-native-linear-gradient';
import {PixelRatio, Dimensions} from 'react-native';

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
  height: 55%;
  margin-bottom: 16px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
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
