import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import styles from './styles/styles';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

//components
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
export const WalkthroughScreen = ({ navigation }) => {
    const [count, setCount] = useState(1);


    var image = require('../../assets/tutorial/tutorial_one.png');
    var image2 = require('../../assets/tutorial/tutorial_two.png');
    var image3 = require('../../assets/tutorial/tutorial_three.png');
    var title = "Multi-chain Wallet";
    var label = "Supporting BTC, AgaveCoin,etc.";
    const next = () => {
        count !== 3 && setCount(count + 1 )
    };
    const back = () => {
      count !== 0 && setCount(count - 1);
    };

    const onSwipeLeft = (gestureState) => {
        next();
    }
 
    const onSwipeRight = (gestureState) => {
        back();
    }

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <Container>
        <GestureRecognizer
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          config={config}
          style={{
            flex: 1,
          }}>
          <ImageBox>
            {count == 1 ? <Image source={image} /> : null}
            {count == 2 ? <Image source={image2} /> : null}
            {count == 3 ? <Image source={image3} /> : null}
          </ImageBox>
        </GestureRecognizer>
        <BodyBox>
          <ContainerText>
            <Title>{title}</Title>
            <Label>{label}</Label>
          </ContainerText>
          <ContainerButtons>
            <View style={styles.dotBox}>
              <View style={count == 1 ? styles.dotBlue : styles.dotGray}></View>
              <View style={count == 2 ? styles.dotBlue : styles.dotGray}></View>
              <View style={count == 3 ? styles.dotBlue : styles.dotGray}></View>
            </View>
            <TouchableOpacity
              style={[{height: 50, backgroundColor: '#2FA0A8'}, styles.button]}
              onPress={next}>
              <Text style={{color: 'white', fontSize: 18}}>Create Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[{height: 50, backgroundColor: '#50CDD5'}, styles.button]}>
              <Text style={{color: 'white', fontSize: 18}}>Import Wallet</Text>
            </TouchableOpacity>
          </ContainerButtons>
        </BodyBox>
      </Container>
    );
};

const Container = styled.View`
  padding: 22px;
  height: 100%;
  width: 100%;
  flexDirection: column;
  justify-content: space-between;
`;
const BodyBox = styled.View`
  height: 50%;
  width: 100%;
`;
const Image = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: contain;
`;
const ImageBox = styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

const ContainerText = styled.View`
  padding: 22px;
  width: 100%;
`;
const ContainerButtons = styled.View`
  padding: 22px;
  width: 100%;
`;
const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;
const Label = styled.Text`
  font-size: 12px;
  color: #8D8D8D;
  text-align: center;
`;
