import styled from 'styled-components/native';
import {Text} from './Texts';

export const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  background-color: #ebe8e8;
`;
export const Label = styled(Text).attrs(() => ({color: 'ligth'}))`
  text-align: justify;
  /* cambiar justfy por prop */
  margin-bottom: 15px;
`;
