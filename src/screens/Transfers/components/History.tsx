import React from 'react';

import styled from 'styled-components/native';
import {colors} from '../../../shared/styles/variables';
import {SmallText, Text} from '../../../shared/styles/styled-components/Texts';

type TransfersHistoryComponentProps = {
  history?: Array<string>;
};
export const TransfersHistoryComponent: React.FC<TransfersHistoryComponentProps> = props => (
  <Container>
    <Text>History</Text>
  </Container>
);

const Container = styled.View`
  background-color: ${colors.whiteDark};
  border: 1px solid red;
  height: 100%;
  width: 100%;
`;
