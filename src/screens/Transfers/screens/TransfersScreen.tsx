import React from 'react';
import styled from 'styled-components/native';
//components
import {Image, View, ScrollView} from 'react-native';
import {CurrencyType} from 'shared/types';
import {Button} from 'shared/components/Button';
import {ClipboardComponent} from 'shared/components/Clipboard';
import {PageContainer, Title, Subtitle} from 'shared/styled-components';
import {TransfersHistoryComponent} from '../components/History';
import {colors} from 'shared/styles';

export const TransfersScreen = ({route}) => {
  console.log(route);
  const {currency}: {currency: CurrencyType} = route.params;
  const {type, value, name} = currency;
  return (
    <>
      <Container>
        <TransactionContainer>
          <Header>
            <Image
              source={
                type === 'BTC'
                  ? require('../../../assets/icons/btc_icon.png')
                  : require('../../../assets/icons/agave_coin_icon.png')
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
        </TransactionContainer>
        <HistoryContainer>
          <TransfersHistoryComponent />
        </HistoryContainer>
      </Container>
    </>
  );
};
const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  justify-content: flex-start;
`;
const TransactionContainer = styled(PageContainer)`
  height: 70%;
  background: ${colors.white};
`;

const Header = styled.View`
  width: 100%;
  height: 60%;
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

const HistoryContainer = styled(PageContainer)`
  background-color: ${colors.whiteDark};
  height: 30%;
`;
