import React, {useState, useEffect} from 'react';
import {Text, SmallText} from 'shared/styled-components/Texts';
import {
  PageContainer,
  Label as BaseLabel,
  Input,
} from 'shared/styled-components';
import styled from 'styled-components/native';
import {colors} from 'shared/styles';
import {TouchableOpacity, Modal} from 'react-native';
import {Button} from 'shared/components/Button';
import BaseIcon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import { CenterModal, ContainerModal, ModalBox, HeaderModal } from 'shared/styled-components';

import FIcon from 'react-native-vector-icons/Feather';

type SendTransferScreenProps = {
  params: {balance: number};
};

export const AddressBookScreen: React.FC<SendTransferScreenProps> = props => {  
  const [state, setState] = useState({
    modalVisible: false,
  });
  const showModal = () => {
    setState({
      modalVisible: !state.modalVisible,
    });
  }
  return (
      <Container style={{alignItems: 'center', justifyContent: 'space-around'}} light>
        <Icon
          name="address-card-o"
          size={60}
          color={colors.black}
        />
        <Button isActivated={true} onClick={() => showModal()}>
          Add
        </Button>
        <Modal
          animationType="slide"
          transparent={true}
          visible={state.modalVisible}
          onRequestClose={() => {
            Toast.show('Modal has been closed.', Toast.SHORT);
          }}>
            <CenterModal style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
              <ContainerModal>
                <HeaderModal>
                  <IconButton onPress={() => setState({modalVisible: !state.modalVisible}) }>
                    <FIcon name="x" size={25} color={colors.black} />
                  </IconButton>
                  <Label>Add new address</Label>
                </HeaderModal>
                <ModalBox>
                  <InputContainer>
                    <Label>Alias</Label>
                    <Input align="left" value="" />
                  </InputContainer>
                  <InputContainer>
                    <Label>Address</Label>
                    <Input align="left" value="" />
                  </InputContainer>

                  <Button isActivated={false} width={"90%"} onClick={() => showModal()}>
                    Add Address
                  </Button>
                </ModalBox>
              </ContainerModal>
            </CenterModal>
        </Modal>
      </Container>
  );
};
const Icon = styled(BaseIcon)`
  
`;
const Container = styled(PageContainer)`
  height: 100%;
`;
const IconButton  = styled.TouchableOpacity`

`;
const InputContainer = styled.View`
  margin: 8px 0;
  padding: 4px 8px;
  width: 90%;
  background-color: ${colors.whiteDark};
  border-radius: 4px;
`;
const Label = styled(BaseLabel)`
  position: relative;
  top: 4px;
`;