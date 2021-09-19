import React from 'react';
import Waves from '../../assets/Waves.png';
import { WavesWrapper } from './styles';

export const WavesAnimation: React.FC = () => {
  return (
    <WavesWrapper>
      <img src={Waves} alt='Sea background' />
    </WavesWrapper>
  );
};
