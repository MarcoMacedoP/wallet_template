import React from 'react';
import {Modal as NativeModal, Dimensions} from 'react-native';
import {colors} from 'shared/styles';
import styled from 'styled-components/native';

type ModalProps = {
  isShowed: boolean;
  onClose: () => void;
  icon?: string;
};
/**
 *  A component to manage modals through app.
 *  @param  isShowed indicates if modal is showed
 *  @param onClose a function to be called when the modal closes.
 *  @param icon (optional) an icon showed in the top of modal
 */
export const Modal: React.FC<ModalProps> = ({
  isShowed,
  onClose,
  icon,
  children,
}) => (
  <Container
    animationType="slide"
    transparent={true}
    visible={isShowed}
    onRequestClose={onClose}>
    <ScrollView
      alwaysBounceVertical
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
      }}>
      <ContainerModal>
        {icon && (
          <IconBoxModal style={{borderRadius: 25}}>
            <IconModal source={icon} />
          </IconBoxModal>
        )}
        <ModalBox>{children}</ModalBox>
      </ContainerModal>
    </ScrollView>
  </Container>
);
const Container = styled(NativeModal)`
  align-items: center;
  justify-content: center;
`;
const ScrollView = styled.ScrollView`
  background-color: ${colors.blackTransparent};
`;
const ContainerModal = styled.View`
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-radius: 25px;
  height: ${Dimensions.get('window').height * 0.8}px;
  width: 90%;
`;

const IconBoxModal = styled.View`
  width: 100%;
  height: 10%;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const IconModal = styled.Image`
  width: 80%;
  height: 80%;
  resize-mode: contain;
`;
const ModalBox = styled.View`
  height: 90%;
  width: 100%;
  align-items: center;
`;
