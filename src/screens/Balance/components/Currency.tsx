import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../shared/styles/variables';
import {View, Image} from 'react-native';

type BalanceCurrencyComponentProps = {
  onClick: () => void;
  type: 'BTC' | 'AGVC';
  name: string;
  value: number;
};
export const BalanceCurrencyComponent: React.FC<BalanceCurrencyComponentProps> = props => {
  const {onClick, type, value, name} = props;
  console.log(name);
  return (
    <Container onPress={onClick} underlayColor={colors.whiteDark}>
      <InfoContainer>
        <TitleContainer>
          <Image
            source={
              type === 'BTC'
                ? require('../../../assets/icons/btc_icon.png')
                : require('../../../assets/icons/agave_coin_icon.png')
            }
          />
          <View>
            <Title> {type}</Title>
            <Subtitle>{name}</Subtitle>
          </View>
        </TitleContainer>
        <View>
          <CurrencyStatus>{String(value)}</CurrencyStatus>
          <CurrencyInLocal>$={value}</CurrencyInLocal>
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
const Subtitle = styled(Title)`
  font-size: 12px;
  text-transform: capitalize;
  color: ${colors.blackLigth};
  padding-left: 4px;
`;
const CurrencyStatus = styled(Title)`
  font-weight: bold;
`;
const CurrencyInLocal = styled.Text`
  font-size: 12px;
  color: ${colors.blackLigth};
`;
