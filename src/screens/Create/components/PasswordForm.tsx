import React, {useState, useEffect} from 'react';
import {Input, Label} from 'shared/styled-components';
import styled from 'styled-components/native';
import {PasswordLabelBox} from './PasswordLabelBox';

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
      <AlertBox>{children}</AlertBox>
    </>
  );
};

const AlertBox = styled.View`
  justify-content: center;
  margin-top: 15px;
  border: 0.5px;
  border-color: #c9c9c9;
  padding: 5px;
`;
