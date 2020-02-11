import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import styles from './styles/styles';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

//components
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
export const CreateScreen = ({ route , navigation }) => {
    const [count, setCount] = useState(1);
    const routeParams = route.params;
    let pass = "";

    const validateEmail = (value) => {

      pass = value;
      var re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
      console.log(re.test(pass));
    };
    console.log(routeParams)
    return (
      <Container>
        <BodyBox>
        <Label>Please set security password </Label>
          <InputGray 
            secureTextEntry={true} 
            keyboardAppearance={'dark'} 
            keyboardType={'email-address'}
            onChangeText={(value) => validateEmail(value)} 
            onSubmitEditing={(data) => {navigation.replace('Home')}}>
          </InputGray>
        </BodyBox>
      </Container>
    );
};

const Container = styled.View`
  padding: 22px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;
const BodyBox = styled.View`
  height: 50%;
  width: 100%;
`;
const InputGray = styled.TextInput`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  background-color: #EBE8E8;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: contain;
`;
const ImageBox = styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

const ContainerText = styled.View`
  padding: 22px;
  width: 100%;
`;
const ContainerButtons = styled.View`
  padding: 22px;
  width: 100%;
`;
const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: center;
`;
const Label = styled.Text`
  font-size: 16px;
  color: #8D8D8D;
  text-align: justify;
  margin-bottom: 15px;
`;
