import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import styles from './styles/styles';
import Toast from 'react-native-simple-toast';
import { PageContainer , H4, SmallText} from 'shared/styled-components';
import { Button } from 'shared/components/Button';
import { MnemonicListComponent } from '../components/MnemonicList';



//components
import { TouchableOpacity, StyleSheet, View, Modal, ToastAndroid } from 'react-native';
export const BackupScreen = ({ navigation }) => {
    const labels = ['peace', 'alert', 'child', 'pilot', 'asset', 'today', 'trophy', 'skirt', 'reveal', 'oven', 'silly', 'inherit'];
    const [labelsSort, setLabels]  = useState(labels);
    const [ step, setStep ] = useState(1); 
    const [ hint, setHint ] = useState("");

    const setPlace = (text) => {
        console.log(text)
        setHint(hint + " " + text)
    };
    const shuffle = () => {
        const n = labelsSort.length; 
        let tempArr = [];

        for (let index = 0; index < n-1; index++) {
            tempArr.push(labelsSort.splice(Math.floor(Math.random()* labelsSort.length ), 1) [0]);
        }
        tempArr.push(labelsSort[0]);
        setLabels(tempArr);
        setStep(2);
    }
    const validate = () => {
        console.log("simon que si ")
        navigation.navigate("Loading");
    }
    return (
        <PageContainer light center={'space-around'}>
            <View style={{paddingHorizontal: 15,}}>
                <H4>Back UP mnemonic phrases </H4>
                {step == 1 ? 
                <SmallText style={{marginTop: 15, fontSize: 15,}}>Make a copy of the following 12 nemonic phrases in correct order. We Will verify in the next step </SmallText>
                :
                <SmallText style={{marginTop: 15, fontSize: 15,}}>Please enter the 12 words in 
                the correct order </SmallText>
                
                }
            </View>

            <TextArea multiline={true} editable={false} value={hint}>

            </TextArea>

            <MnemonicListComponent data={labelsSort} setPlace={setPlace}></MnemonicListComponent>

            <Button
              width="100%"
              margin="0 4px 0 0"
              onClick={() => {
                if (step == 1) {
                    shuffle()
                } else {
                    validate()
                }
              }}>
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
  background-color: #EBE8E8;
  border-radius: 15px;
`;