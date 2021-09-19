import { atom } from 'recoil';

export const diceState = atom({
  key: 'dice',
  default: 3,
});
