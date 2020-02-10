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
    <BackgroundImage
      source={require('../../../assets/images/agave_background.png')}>
      <AssetsContainer>
        <Title>{assets}</Title>
        <SmallText>$</SmallText>
      </AssetsContainer>
    </BackgroundImage>
  );
};
const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;
const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  height: 40%;
  margin-bottom: 16px;
  resize-mode: cover;
  background-color: blue;
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
