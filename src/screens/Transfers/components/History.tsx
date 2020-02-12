import React, {useState} from 'react';

import styled from 'styled-components/native';
import {colors} from '../../../shared/styles/variables';
import {Text, SmallText} from '../../../shared/styles/styled-components/Texts';
import {TouchableHighlight, TouchableOpacity, View} from 'react-native';

type TransfersHistoryComponentProps = {
  history?: Array<string>;
};
export const TransfersHistoryComponent: React.FC<TransfersHistoryComponentProps> = props => {
  const [labelSelected, setLabelSelected] = useState(0);
  const labels = ['All', 'Send', 'Receive', 'Exchange'];
  const handleLabelClick = (labelIndex: number) => setLabelSelected(labelIndex);
  return (
    <Container>
      <Text isBold>History</Text>
      <LabelsContainer>
        {labels.map((text, index) => (
          <TouchableOpacity key={index} onPress={() => handleLabelClick(index)}>
            <Label isSelected={labelSelected === index}>{text}</Label>
          </TouchableOpacity>
        ))}
      </LabelsContainer>
      <View>
        <SmallText color="ligth">No history :(</SmallText>
      </View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${colors.whiteDark};
  border: 1px solid red;
  height: 100%;
  width: 100%;
`;
const LabelsContainer = styled.View`
  flex-direction: row;
  margin: 6px 0;
  justify-content: flex-start;
  padding: 0 8px;
`;
const Label = styled(Text)<{isSelected: boolean}>`
  font-size: 12px;
  padding: 4px 8px;
  font-weight: bold;
  background-color: ${props =>
    props.isSelected ? colors.blackLigth : 'transparent'};
  color: ${props => (props.isSelected ? colors.black : colors.blackLigth)};
  margin-right: 8px;
`;
