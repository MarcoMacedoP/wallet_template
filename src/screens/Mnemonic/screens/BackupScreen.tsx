import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {PageContainer, H4, SmallText} from 'shared/styled-components';
import {Button} from 'shared/components/Button';
import {MnemonicListComponent} from '../components/MnemonicList';

//components
import {View} from 'react-native';

import {useSeeds} from '../hooks/useSeeds';

export const BackupScreen = ({navigation}) => {
  const [labels, suffleLables] = useSeeds();

  const [step, setStep] = useState(1);
  const [hint, setHint] = useState('');

  const setPlace = text => {
    console.log(text);
    setHint(hint + ' ' + text);
  };
  const validate = () => {
    console.log('simon que si ');
    navigation.navigate('Loading');
  };
  const onSubmit = () => {
    if (step == 1) {
      suffleLables();
      setStep(2);
    } else {
      validate();
    }
  };

  return (
    <PageContainer light center={'space-around'}>
      <View style={{paddingHorizontal: 15}}>
        <H4>Back UP mnemonic phrases </H4>
        {step == 1 ? (
          <SmallText style={{marginTop: 15, fontSize: 15}}>
            Make a copy of the following 12 nemonic phrases in correct order. We
            Will verify in the next step{' '}
          </SmallText>
        ) : (
          <SmallText style={{marginTop: 15, fontSize: 15}}>
            Please enter the 12 words in the correct order{' '}
          </SmallText>
        )}
      </View>
      {step == 2 ? (
        <TextArea multiline={true} editable={false} value={hint}></TextArea>
      ) : null }

      {labels.length > 0 ? (
        <MnemonicListComponent data={labels} setPlace={setPlace} step={step}/>
      ) : null}

      <Button width="100%" margin="0 4px 0 0" onClick={onSubmit}>
        {step == 1 ? 'Next' : 'Confirm'}
      </Button>
    </PageContainer>
  );
};

const TextArea = styled.TextInput`
  height: 150px;
  width: 95%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  background-color: #ebe8e8;
  border-radius: 15px;
`;
