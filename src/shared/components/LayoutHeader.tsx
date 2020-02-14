import React from 'react';
import styled from 'styled-components/native';
import {Image, Dimensions, View, Text} from 'react-native';
import {colors} from '../styles';
import {useNavigation} from '@react-navigation/native';
import { Label } from 'shared/styled-components';

type LayoutProps = {
 light?: boolean,
 title?: string,
 titleColor?: string,
};
export const LayoutHeader: React.FC<LayoutProps> = ({
  light = false,
  title,
  titleColor,
}) => {
// export const LayoutHeader = (props: any) => {
  const navigation = useNavigation();
  const handlePressNotifications = () => navigation.navigate('Notifications');
  const handlePressBack = () => navigation.goBack();

  return light == false ? (
    <Container light={light}>
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
  ) : (
    <Container light={light}>
      <NotificationsIcon
        onPress={handlePressBack}
        underlayColor={colors.white}>
        <Image 
          source={
            titleColor 
            ? require('../../assets/icons/arrow_back_white.png') 
            : require('../../assets/icons/arrow_back.png')} 
          style={{width: 25, height: 25,}} />
      </NotificationsIcon>
      <LabelHeader titleColor={titleColor}>
        {title}
      </LabelHeader>
      <Shared
        onPress={() => {console.log('addess-book');
        }}
        underlayColor={colors.white}>
          {titleColor ? 
            <Image source={require('../../assets/icons/shared_icon.png')} style={{resizeMode: 'contain', width: 25, height:25,}} />
          :
            <Image source={require('../../assets/icons/contact_icon.png')} style={{width: 25, height: 25,}} />
          }
      </Shared>
    </Container>
  );
};

type StyleProps = {
  light?: boolean,
};

const Container = styled.View<StyleProps>`
  width: ${Dimensions.get('window').width}px;
  align-items: center;
  justify-content: ${props => props.light ? 'space-between' : 'space-around' };
  flex-direction: row;
  padding: 0 16px;
  background-color: transparent;
`;
const LogoImage = styled.Image`
  margin: 0 auto;
`;
const NotificationsIcon = styled.TouchableHighlight`
  padding: 8px;
  border-radius: 32px;
`;
const Shared = styled.TouchableHighlight`
  width: 10px;
  height: 10px;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
type HeaderProps = {
  titleColor?: string,
};

const LabelHeader = styled(Label)<HeaderProps>`
  align-items: center;
  align-self: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.titleColor ? props.titleColor : colors.black};
`;
