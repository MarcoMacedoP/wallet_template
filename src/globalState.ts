import {createGlobalState} from 'react-hooks-global-state';

export const {useGlobalState} = createGlobalState({
  keystore: {},
  modalAdd: false,
  listAddress: [],
  seed: '',
  pass: '',
});
