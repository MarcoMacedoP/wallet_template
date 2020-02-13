import React from 'react';
type ButtonProps = {
  outline?: boolean;
  secondary?: boolean;
  accent?: boolean;
  isActivated?: boolean;
  onClick: any;
  width?: string;
  margin?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  outline,
  onClick,
  secondary,
  accent,
  width,
  isActivated = true,
  margin,
}) => {
  return isActivated ? (
    <ButtonContainer
      outline={outline}
      onPress={onClick}
      secondary={secondary}
      width={width}
      accent={accent}
      margin={margin}
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
  ) : (
    <ButtonDeactivaded width={width}>
      <Label>{children}</Label>
    </ButtonDeactivaded>
  );
};

import styled from 'styled-components/native';
import {colors} from '../styles';
type StyleProps = {
  margin?: string;
  width?: string;
  outline: boolean;
  secondary: boolean;
  accent: boolean;
  isActivated: boolean;
};

const Label = styled.Text<StyleProps>`
  color: ${props => (!props.outline ? colors.white : colors.primary)};
  font-weight: bold;
  align-self: center;
  padding: 10px;
  text-transform: uppercase;
`;

const BaseButtonStyles = `
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  max-height: 50px;
  margin-top: 5px;
  padding: 8px 4px;
`;

const ButtonContainer = styled.TouchableOpacity<StyleProps>`
  ${BaseButtonStyles}
  width: ${props => (props.width ? props.width : '100%')};
  border: ${props => (props.outline ? `2px solid ${colors.primary}` : 'none')};
  background-color: ${props =>
    props.accent
      ? colors.accent
      : props.outline
      ? 'transparent'
      : props.secondary
      ? colors.primaryLigth
      : colors.primary};
  ${props => props.margin && `margin: ${props.margin}`};
`;

const ButtonDeactivaded = styled.View<StyleProps>`
  ${BaseButtonStyles}
  background-color: ${colors.blackLigth};
  width: ${props => (props.width ? props.width : '100%')};
`;
