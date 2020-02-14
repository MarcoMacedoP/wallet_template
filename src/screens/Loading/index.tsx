import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Toast from 'react-native-simple-toast';
import {Button} from 'shared/components/Button';

import {UIActivityIndicator} from 'react-native-indicators';

//components
export const LoadingScreen = ({navigation}) => {
  //const validation = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  var image = require('assets/images/agave_wallet_create.png');
  var check = require('assets/icons/check_icon.png');

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('Home');
      setChecked(true);
    }, 3000);
  }, []);

  return (
    <Container>
      <ImageBox>
        <Image source={checked ? check : image} />
      </ImageBox>
      <BodyBox>
        <ContainerText>
          {checked ? <Title>Backup was successful! </Title> : null}
          {checked ? (
            <Label>
              Please secure your mnemonic words safety. Make sure you store them
              safely and do not leak information to others{' '}
            </Label>
          ) : (
            <Label>Wallet is being créated Please wait a moment</Label>
          )}
        </ContainerText>
        <ContainerButtons>
          {checked ? (
            <Button
              width="100%"
              margin="0 4px 0 0"
              onClick={() => navigation.replace('Home')}>
              Complete
            </Button>
          ) : (
            <UIActivityIndicator size={50} color="#65DDB9" />
          )}
        </ContainerButtons>
      </BodyBox>
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;
const Title = styled.Text`
  font-size: 25px;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: center;
`;
const BodyBox = styled.View`
  height: 60%;
  width: 100%;
  align-items: center;
`;
const Image = styled.Image`
  width: 75%;
  height: 75%;
  resize-mode: contain;
`;
const ImageBox = styled.View`
  width: 100%;
  height: 40%;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ContainerText = styled.View`
  padding: 25px;
  width: 80%;
  margin-bottom: 35px;
`;
const ContainerButtons = styled.View`
  padding: 22px;
  width: 100%;
`;
const Label = styled.Text`
  font-size: 15px;
  color: #8d8d8d;
  text-align: center;
`;
