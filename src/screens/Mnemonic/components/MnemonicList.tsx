import React, {useState, useEffect} from 'react';

import styled from 'styled-components/native';
import {colors} from 'shared/styles';
import {Text, SmallText} from 'shared/styled-components/Texts';
import {TouchableOpacity} from 'react-native';

type MnemonicListComponentProps = {
  data?: Array<string>;
  setPlace: any;
};
export const MnemonicListComponent: React.FC<MnemonicListComponentProps> = ({data, setPlace}) => {
    
    useEffect(()=> {
        console.log(data)
    }, [data])
  return (
    <Container light>
      <LabelsContainer>
        {data.map((text, index) => (
          <Touchable key={index} onPress={() => setPlace(text)}>
            <Label>{text}</Label>
          </Touchable>
        ))}
      </LabelsContainer>
    </Container>
  );
};
type ContainerProps = {
    light?: Boolean;
}
const Container = styled.View<ContainerProps>`
  align-self: center;
  background-color: ${props => props.light ? colors.white : colors.whiteDark};
  margin: 25px;
`;
const LabelsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const Touchable = styled.TouchableOpacity`
  background-color: ${colors.accentLight};
  color: ${colors.primary};
  margin: 8px;
  border-radius: 5px;
`;
const Label = styled(Text)`
  font-size: 12px;
  padding: 10px 15px 10px;
  font-weight: bold;
  color: ${colors.primary};
`;
const ContentContainer = styled.View`
  padding: 0 8px;
`;
