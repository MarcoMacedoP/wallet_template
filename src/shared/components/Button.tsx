import React from 'react';
type ButtonProps = {
  outline?: boolean;
  secondary?: boolean;
  accent?: boolean;
  onClick: any;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  outline,
  onClick,
  secondary,
  accent,
}) => {
  return (
    <ButtonContainer
      outline={outline}
      onPress={onClick}
      secondary={secondary}
      accent={accent}
      underlayColor={
        outline
          ? colors.white
          : accent
          ? colors.primary
          : secondary
          ? colors.primary
          : colors.accent
      }>
      <Label outline={outline}>{children}</Label>
    </ButtonContainer>
  );
};

import styled from 'styled-components/native';
import {colors} from '../styles/variables';
type StyleProps = {
  outline: boolean;
  secondary: boolean;
  accent: boolean;
};

const Label = styled.Text<StyleProps>`
  color: ${props => (!props.outline ? colors.white : colors.primary)};
  font-weight: bold;
  align-self: center;
  padding: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.TouchableHighlight<StyleProps>`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 100%;
  margin-top: 5px;
  border: ${props => (props.outline ? `2px solid ${colors.primary}` : 'none')};
  background-color: ${props =>
    props.accent
      ? colors.accent
      : props.outline
      ? 'transparent'
      : props.secondary
      ? colors.primaryLigth
      : colors.primary};
  padding: 8px 4px;
`;
