import {Dimensions} from 'react-native';

export const colors = {
  primary: '#2fa0a8;',
  primaryLigth: '#50cdd5',
  primaryDark: '#2330d7',
  accent: '#05c2ae',
  white: '#ffffff',
  whiteDark: '#f6f5fb',
  black: '#575555',
  blackLigth: '#b3b3b3',
};

export const borderRadius = (percentage: number) =>
  `${(Dimensions.get('window').width * percentage) / 100}px`;
