import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PasswordLabelBox = ({isValid, text}) => (
  <LabelBox>
    <LabelAlert style={isValid ? {color: 'green'} : null}>
      <Icon name="check" size={15} color={isValid ? 'green' : 'gray'} />
      {text}
    </LabelAlert>
  </LabelBox>
);
const LabelAlert = styled.Text`
  font-size: 15px;
  color: #8a8a8a;
  text-align: justify;
`;

const LabelBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
`;
