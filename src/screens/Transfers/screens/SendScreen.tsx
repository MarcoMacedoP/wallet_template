import React from 'react';
import {Text} from 'shared/styled-components/Texts';
import {PageContainer, Label, Input} from 'shared/styled-components';

type SendTransferScreenProps = {};

export const SendTransferScreen: React.FC<SendTransferScreenProps> = props => {
  return (
    <PageContainer>
      <Text> Transfer Amount</Text>
      <Label> Jaja al chile</Label>
      <Input></Input>
    </PageContainer>
  );
};
