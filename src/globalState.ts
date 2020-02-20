import {createGlobalState} from 'react-hooks-global-state';

type addressesType = Array<{
  address: string;
  eth: number;
  token: number;
}>;
type globalState = {
  keystore: any;
  modalAdd: boolean;
  modalQR: boolean;
  addresses: addressesType;
  contactsQuantity: 0;
};

export const {useGlobalState} = createGlobalState<globalState>({
  keystore: {},
  modalAdd: false,
  modalQR: false,
  addresses: [],
  contactsQuantity: 0,
});
