import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import styles from './styles/styles';
import Toast from 'react-native-simple-toast';
import { CenterModal, ContainerModal, IconBoxModal, IconModal , ModalBox} from 'shared/styled-components';


//components
import { TouchableOpacity, Text, Modal, } from 'react-native';
export const MnemonicScreen = ({ navigation }) => {
    const [state, setState] = useState({
      modalVisible: false,
    })

    var image = require('assets/images/agave_cellphone.png');
    var webcam = require('assets/icons/webcam.png');

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <Container>
        <ImageBox>
          <Image source={image} />
        </ImageBox>
        <BodyBox>
          <ContainerText>
              <Title>Backup Mnermonic Phrases</Title>
              <Label>We have created Agave Coin wallet 
              for you. The  decentralized Agave
               Coin Wallet can manage multiple
               crypto wallets under a single set 
              of mnemonic phrases</Label>
            
          </ContainerText>
          <ContainerButtons>
            <TouchableOpacity
              style={[{height: 50, backgroundColor: '#2FA0A8'}, styles.button]}
              onPress={() => {
                setState({
                  modalVisible: true,
                });
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Start Backup </Text>
            </TouchableOpacity>
          </ContainerButtons>
        </BodyBox>

        <Modal
          animationType="slide"
          transparent={true}
          visible={state.modalVisible}
          onRequestClose={() => {
            Toast.show('Modal has been closed.', Toast.SHORT);
          }}>
            <CenterModal style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
              <ContainerModal>
                <IconBoxModal style={{borderRadius: 25,}}>
                  <IconModal source={webcam} />
                </IconBoxModal>
                <ModalBox>
                  <ContainerText>
                      <Title style={{fontSize: 15, textAlign: 'justify', marginBottom:10,}}>Having the mnemonic phrases can 
                      have full control over assets. 
                      Users should be aware of the following 
                      matters</Title>
                      <Label style={{fontSize: 15, textAlign: 'justify', marginBottom:10,}}>Never take screenshots. Pay close attention
                      to cameras around.
                      </Label>
                      <Label style={{fontSize: 15, textAlign: 'justify', marginBottom:10,}}>
                      Write down the words on paper and keep 
                      it in isolated from the internet, Prohibit the 
                      disclosure or publicity of mnemonics in any 
                      form or method.
                      </Label>
                      <Label style={{fontSize: 15, textAlign: 'justify', marginBottom:10,}}>
                      Please make sure to keepc a paper copy of 
                      your mnemonic phrases. Agave Coin is not 
                      liable for the los of digital assets resulting from 
                      the loss, damage or other loss of control over 
                      the paper copy of mnemonic phrases.</Label>
                    
                  </ContainerText>
                  <ContainerButtons>
                    <TouchableOpacity
                      style={[{height: 50, backgroundColor: '#2FA0A8'}, styles.button]}
                      onPress={() => {
                        navigation.push('Backup')
                        setState({
                          modalVisible: false,
                        });
                      }}>
                      <Text style={{color: 'white', fontSize: 18}}>OK </Text>
                    </TouchableOpacity>
                  </ContainerButtons>
                </ModalBox>
              </ContainerModal>
            </CenterModal>
        </Modal>
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

const BodyBox = styled.View`
  height: 60%;
  width: 100%;
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
  font-size: 12px;
  color: #8D8D8D;
  text-align: center;
`;
