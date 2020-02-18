import React, {useState, useEffect} from 'react';
import {Text, SmallText} from 'shared/styled-components/Texts';
import {
  PageContainer,
  Label as BaseLabel,
  Input,
} from 'shared/styled-components';
import styled from 'styled-components/native';
import {colors} from 'shared/styles';
import {TouchableOpacity, View, TouchableHighlight, StyleSheet, Animated, Dimensions} from 'react-native';
import {Button} from 'shared/components/Button';
import BaseIcon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import { Modal } from 'shared/components';
import {useGlobalState} from 'globalState';
import FIcon from 'react-native-vector-icons/Feather';
import { SwipeListView } from 'react-native-swipe-list-view';
import AsyncStorage from '@react-native-community/async-storage';


type SendTransferScreenProps = {
};

export const AddressBookScreen: React.FC<SendTransferScreenProps> = props => {  
  
  const [modalAdd, setModalAdd] = useGlobalState('modalAdd');
  const [listAddress, setListAddress] = useGlobalState('listAddress');
  const [state, setState] = useState({
    index: 0,
    alias: '',
    address: '',
  });

  useEffect(() => {
    async function getAddress () {
      try {
       const arrayAddress = JSON.parse( await AsyncStorage.getItem('addresses'));
       setListAddress(arrayAddress);
      } catch (error) {
        console.log(error);
      }
    }
    if (listAddress.length === 0) {
      getAddress();
    }
  }, [])
  const addNewAddress = async ()  => {
    var data = {
      alias: state.alias,
      address: state.address,
      index: state.index,
    }
    setListAddress([...listAddress, data]);
    setModalAdd(!modalAdd);
    await AsyncStorage.setItem('addresses', JSON.stringify(listAddress));
    setState({
      index: state.index + 1,
      alias: '',
      address: '',
    });
  }
  
  const onTextAliasChange = text => {
    setState({...state, alias: text});
  };
  const onTextAddressChange = text => {
    setState({...state, address: text});
  };
  
  const deleteAddress = async ({item}) => {
    const tempArray = listAddress.filter(data => data.index !== item.index && data)
    console.log(tempArray);
    setListAddress(tempArray);
    await AsyncStorage.setItem('addresses', JSON.stringify(tempArray));
  }

  return (
      <Container hasData={listAddress.length === 0 ? false : true} light>
        {listAddress.length === 0 ?
          <>
            <Icon
              name="address-card-o"
              size={60}
              color={colors.black}
            />
            <Button isActivated={true} onClick={() => setModalAdd(!modalAdd)}>
              Add
            </Button>
          </>
        :
          <ListContent>
            <SwipeListView
                data={listAddress}
                renderItem={ (data, rowMap) => (
                    <TouchableHighlight 
                    onPress={() => console.log("here")}
                    underlayColor={colors.lightGray}
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      borderRadius: 5,
                      height: 60,
                      marginTop: 10,
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                      <>
                        <IconBox>
                          <FIcon name="user" size={25} color={colors.accent} />
                        </IconBox>
                        <LabelBox>
                          <Text>{data.item.alias}</Text>
                          <Text style={{color: colors.gray}}> {data.item.address}</Text>
                        </LabelBox>
                      </>
                    </TouchableHighlight>
                )}
                renderHiddenItem={ (data, rowMap) => (
                    <TouchableOpacity 
                      onPress={() => deleteAddress(data)}
                      style={{
                        alignItems: 'center',
                        backgroundColor: '#ef5350',
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 15,
                        marginTop: 10,
                        height: 60,
                        borderRadius: 5,
                      }}>
                         <FIcon name="x-circle" size={25} color={colors.white} />
                    </TouchableOpacity>
                )}
                leftOpenValue={75}   
            />
          </ListContent>
        }

        <Modal
          isShowed={modalAdd}
          icon={'x'}
          onClose={() => {
            setModalAdd(!modalAdd);
          }}>
            <InputContainer>
              <Label>Alias</Label>
              <Input
                  align="left"
                  value={state.alias}
                  maxLength={15}
                  keyboardAppearance={'dark'}
                  onChangeText={value => onTextAliasChange(value)}
                />
            </InputContainer>
            <InputContainer>
              <Label>Address</Label>
              <Input
                  align="left"
                  value={state.address}
                  keyboardAppearance={'dark'}
                  onChangeText={value => onTextAddressChange(value)}
                />
            </InputContainer>
            <Button isActivated={true} width={"90%"} onClick={() => addNewAddress()}>
              Add Address
            </Button>
        </Modal>
      </Container>
  );
};
const Icon = styled(BaseIcon)`
  
`;
type ContainerProps = {
  hasData: boolean
};
const Container = styled<ContainerProps>(PageContainer)`
  height: 100%;
  align-items: center;
  justify-content: ${ props => props.hasData ? 'center' : 'space-around'};
  background-color: ${ props => props.hasData ? colors.lightGray : colors.white};
`;
const ListContent = styled.View`
  margin-top: 10%;
  width: 100%;
  height: 80%;
`;
const InputContainer = styled.View`
  margin: 8px 0;
  padding: 4px 8px;
  width: 90%;
  background-color: ${colors.whiteDark};
  border-radius: 4px;
`;
const IconBox = styled.View`
  width: 10%;
  justify-content: center;
  align-items: center;
`;

const LabelBox = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
`;
const Label = styled(BaseLabel)`
  position: relative;
  top: 4px;
`;