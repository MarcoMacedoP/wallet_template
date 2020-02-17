import {createGlobalState} from 'react-hooks-global-state';

export const {useGlobalState} = createGlobalState({
  token: true,
  seed: '',
  pass: '',
});
