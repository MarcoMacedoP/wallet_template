import styled from 'styled-components/native';
import {Text} from './Texts';
import {colors} from 'shared/styles';

type InputProps = {
  align: 'left' | 'center' | 'right';
};
export const Input = styled.TextInput<InputProps>`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  text-align: ${props => props.align || 'center'};
  font-size: 15px;
  background-color: ${colors.whiteDark};
`;
export const Label = styled(Text).attrs(() => ({color: 'ligth'}))`
  text-align: justify;
  /* cambiar justfy por prop */
`;
