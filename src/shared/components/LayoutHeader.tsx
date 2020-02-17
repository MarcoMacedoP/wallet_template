import React from 'react';
import styled from 'styled-components/native';
import {Image, Dimensions, View, Text} from 'react-native';
import {colors} from '../styles';
import {useNavigation} from '@react-navigation/native';
import { Label } from 'shared/styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/Ionicons';
import {useGlobalState} from 'globalState';

type LayoutProps = {
 light?: boolean,
 title?: string,
 titleColor?: string,
 leftIcon?: string,
 rightIcon?: string,
};
export const LayoutHeader: React.FC<LayoutProps> = ({
  light = false,
  title,
  titleColor,
  leftIcon,
  rightIcon,
}) => {
// export const LayoutHeader = (props: any) => {
  const navigation = useNavigation();
  const [modalAdd, setModalAdd] = useGlobalState('modalAdd');
  const handlePressNotifications = () => navigation.navigate('Notifications');
  const handlePressBack = () => navigation.goBack();
  const renderLeftIcon = () => {
    if (leftIcon == 'back-white')
      return <FIcon name="arrow-left" size={20} color={colors.white} />
    else if(leftIcon == 'back-black')
      return  <FIcon name="arrow-left" size={20} color={colors.black} />
    else
    return  null;
  }
  const renderRightIcon = () => {
    if (rightIcon == 'address')
      return <Icon name="address-book" size={20} color={colors.black} />
    else if(rightIcon == 'shared')
      return  <FIcon name="share" size={20} color={colors.white} />
    else if(rightIcon == 'add')
      return  <FIcon name="plus" size={20} color={colors.black} />
    else
    return  null;
  }

  return light == false ? (
    <Container light={light}>
      <NotificationsIcon
        onPress={handlePressNotifications}
        underlayColor={colors.primaryLigth}>
        <MIcon name="ios-notifications-outline" size={25} color={colors.white} />
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
        <>
          {
            renderLeftIcon()
          }
        </>
      </NotificationsIcon>
      <LabelHeader titleColor={titleColor}>
        {title}
      </LabelHeader>
      <Shared
        onPress={() => {
          if (rightIcon == 'address') {
            navigation.navigate('Transfers', {screen: 'address'});
          } else if(rightIcon == 'add') {
            setModalAdd(!modalAdd) 
          }
        }}
        underlayColor={colors.white}>
        <>
          {
            renderRightIcon()
          }
        </>
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
