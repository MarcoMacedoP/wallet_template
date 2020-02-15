import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import styles from './styles/styles';
import Toast from 'react-native-simple-toast';
import Wallet from 'erc20-wallet';
import Icon from 'react-native-vector-icons/FontAwesome';


import {Button} from 'shared/components/Button';
//components
import {Image, TouchableOpacity, Text} from 'react-native';
import {Input, Label} from 'shared/styled-components';
import {useGlobalState} from 'globalState';
export const CreateScreen = ({navigation}) => {
  const validation = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  const [state, setState] = useState({
    count: 1,
    pass: '',
    passConfirm: '',
    checked: false,
    isLoading: true,
  });

  async function onSubmit() {
    console.log(
      'state.passConfirm == state.pass ?',
      state.passConfirm == state.pass,
    );
    if (state.passConfirm == state.pass) {
      Wallet.password = state.pass;
      navigation.navigate('Mnemonic');
    } else {
      Toast.show('Las contraseñas no coinciden', Toast.SHORT);
    }
  }

  return (
    <Container>
      <BodyBox>
        {state.count == 1 ? <Label>Please set security password </Label> : null}
        {state.count == 1 ? (
          <Input
            secureTextEntry={true}
            keyboardAppearance={'dark'}
            onChangeText={value => {
              setState({
                ...state,
                pass: value,
                checked: validation.test(state.pass),
              });
            }}
            onSubmitEditing={() => {
              if (validation.test(state.pass)) {
                setState({
                  ...state,
                  count: 2,
                  checked: false,
                });
                console.log(state.pass);
              } else {
                Toast.show(
                  'La contraseña no cuenta con las caracteristicas',
                  Toast.SHORT,
                );
              }
            }}></Input>
        ) : null}
        {state.count == 2 ? (
          <Label>Please re-enter your security password </Label>
        ) : null}
        {state.count == 2 ? (
          <Input
            secureTextEntry={true}
            keyboardAppearance={'dark'}
            onChangeText={value =>
              setState({
                ...state,
                passConfirm: value,
                checked: validation.test(state.pass),
              })
            }
            onSubmitEditing={onSubmit}
          />
        ) : null}
        <AlertBox>
          <LabelBox>
            <LabelAlert style={state.checked ? {color: 'green'} : null}>
              <Icon name="check" size={15} color={state.checked ? 'green' : 'gray'}/> A lower case letter
            </LabelAlert>
          </LabelBox>
          <LabelBox>
            <LabelAlert style={state.checked ? {color: 'green'} : null}>
              <Icon name="check" size={15} color={state.checked ? 'green' : 'gray'}/> An uppercase letter
            </LabelAlert>
          </LabelBox>
          <LabelBox>
            <LabelAlert style={state.checked ? {color: 'green'} : null}>
              <Icon name="check" size={15} color={state.checked ? 'green' : 'gray'}/> A number
            </LabelAlert>
          </LabelBox>
          <LabelBox>
            <LabelAlert style={state.checked ? {color: 'green'} : null}>
              <Icon name="check" size={15} color={state.checked ? 'green' : 'gray'}/> An special character
            </LabelAlert>
          </LabelBox>
          <LabelBox>
            <LabelAlert style={state.checked ? {color: 'green'} : null}>
              <Icon name="check" size={15} color={state.checked ? 'green' : 'gray'}/> 8~32 characters
            </LabelAlert>
          </LabelBox>
        </AlertBox>

        {/* <Button onClick={onSubmit} isLoading={state.isLoading}>
          Continue
        </Button> */}
        <TouchableOpacity
          style={[{height: 50, backgroundColor: '#2FA0A8'}, styles.button]}
          onPress={() => {
            if (state.count == 1) {
              if (validation.test(state.pass)) {
                setState({
                  ...state,
                  count: 2,
                  checked: false,
                });
                console.log(state.pass);
              } else {
                Toast.show(
                  'La contraseña no cuenta con las caracteristicas',
                  Toast.SHORT,
                );
              }
            } else {
              console.log(state.pass);
              console.log(state.passConfirm);
              if (state.passConfirm == state.pass) {
                navigation.navigate('Mnemonic');
              } else {
                Toast.show('Las contraseñas no coinciden', Toast.SHORT);
              }
            }
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Continue</Text>
        </TouchableOpacity>
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

const LabelAlert = styled.Text`
  font-size: 15px;
  color: #8a8a8a;
  text-align: justify;
`;

const LabelBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
`;
const AlertBox = styled.View`
  justify-content: center;
  margin-top: 15px;
  border: 0.5px;
  border-color: #c9c9c9;
  padding: 5px;
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
