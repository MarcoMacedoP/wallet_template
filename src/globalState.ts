import {createGlobalState} from 'react-hooks-global-state';

export const {useGlobalState} = createGlobalState({
  keystore: false,
  modalAdd: false,
  modalQR: false,
  listAddress: [{index: -1}],
  contactsQuantity: 0,
  seed: '',
  pass: '',
});
