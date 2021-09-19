import { atom } from 'recoil';

export const sidebarState = atom({
  key: 'sidebar',
  default: true,
});

export const sidebarDisplayState = atom({
  key: 'sidebarDisplay',
  default: true,
});
