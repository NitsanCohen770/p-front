import React from 'react';
import Ship from '../../assets/Ship.png';
import { ShipWrapper } from './styles';

export const ShipPlayer: React.FC = () => {
  return (
    <ShipWrapper>
      <img src={Ship} alt='Sea background' />
    </ShipWrapper>
  );
};
