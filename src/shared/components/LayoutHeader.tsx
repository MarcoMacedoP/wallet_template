import React from 'react';
import styled from 'styled-components/native';
import {Image, Dimensions, View, Text} from 'react-native';
import {colors} from '../styles/variables';
import { useNavigation } from '@react-navigation/native';
export const LayoutHeader = (props: any) => {
    const navigation = useNavigation();
  const handlePressNotifications = () => navigation.navigate("Notifications");

  return (
    <Container>
      <NotificationsIcon
        onPress={handlePressNotifications}
        underlayColor={colors.primaryLigth}>
        <Image source={require('../../assets/icons/notifications_icon.png')} />
      </NotificationsIcon>
      <LogoImage
        resizeMode="cover"
        source={require('../../assets/icons/logo_mini.png')}
      />
    </Container>
  );
};
const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 16px;
`;
const LogoImage = styled.Image`
  margin: 0 auto;
`;
const NotificationsIcon = styled.TouchableHighlight`
  padding: 8px;
  border-radius: 32px;
`;
