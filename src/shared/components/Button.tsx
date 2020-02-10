import React from 'react';
type ButtonProps = {
  outline?: boolean;
  onClick: any;
};

export const Button: React.FC<ButtonProps> = ({children, outline, onClick}) => {
  return (
    <ButtonContainer
      outline={outline}
      onPress={onClick}
      underlayColor={colors.primaryLigth}>
      <Label outline={outline}>{children}</Label>
    </ButtonContainer>
  );
};

import styled from 'styled-components/native';
import {colors} from '../styles/variables';

const Label = styled.Text<{outline: boolean}>`
  color: ${props => (!props.outline ? colors.white : colors.whiteDark)};
  font-weight: 700;
  align-self: center;
  padding: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.TouchableHighlight<{outline: boolean}>`
  background-color: ${props =>
    props.outline ? 'transparent' : colors.primary};
  width: 100%;
  margin-top: 5px;
  border-color: ${props => (props.outline ? colors.primary : 'transparent')};
  border-width: 2px;
`;
