import React from 'react';
import { IslandWrapper } from './styles';
import { IslandWrapperProps } from '../../shared/interfaces';

interface IslandProps extends IslandWrapperProps {
  fileName: string;
}

export const Island: React.FC<IslandProps> = ({ position, fileName }) => {
  return (
    <IslandWrapper position={position}>
      <img
        src={require(`../../assets/${fileName}.png`).default}
        alt={fileName}
      />
    </IslandWrapper>
  );
};
