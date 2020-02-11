import React from 'react';
import styled from 'styled-components/native';
//components
import {Image} from 'react-native';
import {CurrencyType} from '../../shared/types/currency';
import {Title, Subtitle} from '../../shared/styles/styled-components/Texts';
import {Button} from '../../shared/components/Button';
import {ClipboardComponent} from '../../shared/components/Clipboard';
import {PageContainer} from '../../shared/styles/styled-components/Containers';

export const TransfersScreen = ({navigation, route}) => {
  const {currency}: {currency: CurrencyType} = route.params;
  const {type, value, name} = currency;
  return (
    <PageContainer>
      <Header>
        <Image
          source={
            type === 'BTC'
              ? require('../../assets/icons/btc_icon.png')
              : require('../../assets/icons/agave_coin_icon.png')
          }
        />
        <Title>{currency.value}</Title>
        <Subtitle>= ${currency.value}</Subtitle>
      </Header>
      <ClipboardContainer>
        <ClipboardComponent text="e0d123e5f316bef78bfdf5a008837577" />
      </ClipboardContainer>
      <ButtonsContainer>
        <Button
          accent
          width="50%"
          margin="0 4px 0 0"
          onClick={() => console.log('lol')}>
          Send
        </Button>
        <Button
          secondary
          width="50%"
          margin="0 0 0 4px"
          onClick={() => console.log('lol')}>
          Receive
        </Button>
      </ButtonsContainer>
    </PageContainer>
  );
};

const Header = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ClipboardContainer = styled.View`
  margin: 16px 0;
`;
const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;
