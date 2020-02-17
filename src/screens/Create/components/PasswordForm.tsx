import React, {useState, useEffect} from 'react';
import {Input, Label} from 'shared/styled-components';
import styled from 'styled-components/native';
import {PasswordLabelBox} from './PasswordLabelBox';
import {colors} from 'shared/styles';

interface PasswordFormProps {
  onTextChange: (text: string) => void;
  onSubmitEditing: () => void;
  labelText: string;
  value: string;
}
export const PasswordForm: React.FC<PasswordFormProps> = ({
  onTextChange,
  onSubmitEditing,
  labelText,
  value,
  children,
}) => {
  return (
    <>
      <Label>{labelText} </Label>
      <Input
        secureTextEntry={true}
        value={value}
        keyboardAppearance={'dark'}
        onChangeText={value => onTextChange(value)}
        onSubmitEditing={onSubmitEditing}
      />
      <AlertBox hasChildren={children}>{children}</AlertBox>
    </>
  );
};

const AlertBox = styled.View`
  justify-content: center;
  margin: 16px 0;
  border: 0.5px;
  border-color: ${props =>
    props.hasChildren ? colors.whiteDark : 'transparent'};
  padding: 5px;
`;
