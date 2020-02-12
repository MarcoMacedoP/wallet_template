import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import styles from './styles/styles';
import Toast from 'react-native-simple-toast';

//components
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
export const CreateScreen = ({ navigation }) => {
    const [state, setState] = useState({
      count: 1,
      pass: "",
      passConfirm: "",
    });
    
    return (
      <Container>
        <BodyBox>
        {state.count == 1 ?
        <Label>Please set security password </Label>
        :null}
        {state.count == 1 ? 
          <InputGray 
            secureTextEntry={true} 
            keyboardAppearance={'dark'} 
            keyboardType={'email-address'}
            onChangeText={(value) => setState({
              ...state,
              pass: value,
            })} 
            onSubmitEditing={() => {
              var re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
              if(re.test(state.pass)) {
                setState({
                  ...state,
                  count: 2,
                });
                console.log(state.pass);
              } else {
                Toast.show('La contraseña no cuenta con las caracteristicas', Toast.SHORT);
              }
            }}>
          </InputGray>
        :null}
        {state.count == 2 ?
        <Label>Please re-enter your security password </Label>
        :null}
        {state.count == 2 ? 
          <InputGray 
            secureTextEntry={true} 
            keyboardAppearance={'dark'} 
            keyboardType={'email-address'}
            onChangeText={(value) => 
              setState({
                ...state,
                passConfirm: value
              })
            } 
            onSubmitEditing={(data) => {
              console.log(state.pass);
              console.log(state.passConfirm);
              if (state.passConfirm == state.pass) {
                navigation.replace('Home')
              } else {
                Toast.show('Las contraseñas no coinciden', Toast.SHORT);
              }
            }}>
          </InputGray>
        :null}
          
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
