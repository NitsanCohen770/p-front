import React from 'react';
import { Island } from '../';
import { islandsData } from '../../data/islands';

export const Islands: React.FC = () => {
  return (
    <>
      {islandsData.map(({ isleName, position }) => (
        <Island key={isleName} fileName={isleName} position={position} />
      ))}
    </>
  );
};
