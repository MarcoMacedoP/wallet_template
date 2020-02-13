import React, {useState} from 'react';
import {Text} from 'shared/styled-components/Texts';
import {PageContainer, Label, Input} from 'shared/styled-components';
import styled from 'styled-components/native';
import {colors} from 'shared/styles';
import {TouchableOpacity, Image} from 'react-native';
import Slider from '@react-native-community/slider';

type SendTransferScreenProps = {};

export const SendTransferScreen: React.FC<SendTransferScreenProps> = props => {
  const [transferValue, setTransferValue] = useState('');
  const [minerFee, setMinerFee] = useState(0);

  return (
    <>
      <Header>
        <Title>Transfer Amount</Title>
        <TransferInput
          placeholder={'Balance 0.00'}
          align="left"
          onChangeText={text => setTransferValue(text)}>
          <TransferText>{transferValue}</TransferText>
        </TransferInput>
      </Header>
      <PageContainer style={{paddingTop: 8}}>
        <InputContainer>
          <Label>To</Label>
          <Input align="left" value="15566sss5s5ss" />
          <IconContainer>
            <Image source={require('assets/icons/contact_icon.png')} />
          </IconContainer>
        </InputContainer>

        <InputContainer>
          <Label>From</Label>
          <Input align="left">15566sss5s5ss</Input>
        </InputContainer>

        <InputContainer>
          <Label>Miner fee</Label>

          <Slider
            minimumValue={0}
            maximumValue={1}
            value={minerFee}
            onValueChange={setMinerFee}
          />
        </InputContainer>
      </PageContainer>
    </>
  );
};

const Header = styled(PageContainer)`
  background-color: ${colors.whiteDark};
  padding-bottom: 12px;
  height: auto;
`;
const Title = styled(Text)`
  margin-bottom: 16px;
`;
const TransferInput = styled(Input)`
  font-size: 14px;
  font-weight: normal;
`;
const TransferText = styled(Text)`
  font-weight: bold;
  font-size: 18px;
`;
const InputContainer = styled.View`
  margin: 8px 0;
`;
const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  bottom: 12px;
  justify-content: center;
  align-items: center;
`;
