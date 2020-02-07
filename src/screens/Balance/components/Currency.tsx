import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../shared/styles/variables';
import {View, Image} from 'react-native';

type BalanceCurrencyComponentProps = {
  onClick: () => void;
};
export const BalanceCurrencyComponent: React.FC<BalanceCurrencyComponentProps> = props => {
  const {onClick} = props;
  return (
    <Container onPress={onClick} underlayColor={colors.whiteDark}>
      <InfoContainer>
        <TitleContainer>
          <Image
            source={{
              width: 24,
              height: 24,
              uri:
                'https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitoin_btc_coin_crypto-512.png',
            }}
          />
          <Title> BTC </Title>
        </TitleContainer>
        <View>
          <CurrencyStatus>0.00</CurrencyStatus>
          <CurrencyInLocal>=$0.00</CurrencyInLocal>
        </View>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.TouchableHighlight`
  background-color: ${colors.white};
  margin-bottom: 16px;
  padding: 16px;
  border-bottom-width: 1.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
const InfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TitleContainer = styled.View`
  flex-direction: row;
`;
const Title = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  color: ${colors.black};
  margin-left: 8px;
`;
const CurrencyStatus = styled(Title)`
  font-weight: bold;
`;
const CurrencyInLocal = styled.Text`
  font-size: 12px;
  color: ${colors.blackLigth};
`;
