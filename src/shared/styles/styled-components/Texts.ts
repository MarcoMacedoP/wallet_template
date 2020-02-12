import styled from 'styled-components/native';
import {colors} from '../variables';

export const Title = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 40px;
  color: ${colors.black};
  margin-left: 8px;
`;
export const Subtitle = styled(Title)`
  font-size: 24px;
  text-transform: capitalize;
  color: ${colors.blackLigth};
  font-weight: 600;
`;
type TextProps = {
  isBold?: boolean;
  color?: 'ligth';
};
export const Text = styled.Text<TextProps>`
  text-transform: capitalize;
  font-weight: ${props => (props.isBold ? 'bold' : '400')};
  font-size: 16px;
  color: ${props =>
    props.color === 'ligth' ? colors.blackLigth : colors.black};
`;
export const SmallText = styled(Text)`
  font-size: 12px;
`;
