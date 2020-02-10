import React from 'react';
import styled from 'styled-components/native';
import {TabBar as BaseTabBar} from 'react-native-tab-view';
import {colors} from '../styles/variables';

export const TabBar = props => (
  <StyledTabBar
    {...props}
    indicatorStyle={{
      backgroundColor: colors.black,
      marginBottom: 2,
    }}
    renderLabel={({route, focused}) => (
      <Label focused={focused}>{route.title}</Label>
    )}
  />
);

const StyledTabBar = styled(BaseTabBar)`
  background-color: ${colors.white};
  TabBarIndicator {
    background-color: red;
  }
`;
const Label = styled.Text<{focused: boolean}>`
  color: ${props => (props.focused ? colors.black : colors.blackLigth)};
  font-weight: bold;
`;
