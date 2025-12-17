import { use } from 'react';

const objetctToReturn = {
  id: '1',
  title: 'First video',
  description: 'Video description',
  image: 'blue'
};

export type typeObjectData = typeof objetctToReturn;
let cache: null | Promise<typeObjectData> = null;

function fetchVideo() {
  if (!cache) {
    cache = new Promise(resolve => {
      setTimeout(() => {
        resolve(objetctToReturn);
      }, 1000);
    });
  }
  return cache;
}

export function useLazyVideoData(): typeObjectData {
  return use(fetchVideo());
}
