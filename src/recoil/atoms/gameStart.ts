import { atom } from 'recoil';

export const gameState = atom({
  key: 'game',
  default: false,
});
