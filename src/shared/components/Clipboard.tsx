import React from 'react';
import styled from 'styled-components/native';
import {SmallText} from '../styled-components/Texts';
import {Image, Clipboard} from 'react-native';
import {colors} from '../styles';
import Toast from 'react-native-simple-toast';

export const ClipboardComponent = ({text}) => {
  const onClickHandler = () => {
    Clipboard.setString(text);
    Toast.show('Adress copied to clipboard!', Toast.SHORT);
  };

  return (
    <Container onPress={onClickHandler} underlayColor={colors.blackTransparent}>
      <>
        <SmallText> {text}</SmallText>
        <Image source={require('../../assets/icons/clipboard_icon.png')} />
      </>
    </Container>
  );
};

const Container = styled.TouchableHighlight`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 8px 8px;
  border-radius: 16px;
`;
