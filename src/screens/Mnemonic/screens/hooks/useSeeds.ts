import {useGlobalState} from 'globalState';
import {useState, useEffect} from 'react';

export function useSeeds(): [Array<string>, () => void] {
  const [seed] = useGlobalState('seed');
  const [seedsSorted, setSeedSorted] = useState(seed.split(' '));

  const shuffleSeeds = () => {
    const n = seedsSorted.length;
    let tempArr = [];

    for (let index = 0; index < n - 1; index++) {
      tempArr.push(
        seedsSorted.splice(
          Math.floor(Math.random() * seedsSorted.length),
          1,
        )[0],
      );
    }
    tempArr.push(seedsSorted[0]);
    setSeedSorted(tempArr);
  };
  return [seedsSorted, shuffleSeeds];
}
