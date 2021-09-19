import styled from 'styled-components';
import { pirateAnimation } from '../../data/pirateAnimation';

interface PirateWrapperProps {
  diceNumber: number;
  isGameStart: boolean;
}

export const PirateWrapper = styled.div<PirateWrapperProps>`
  position: relative;
  right: 1459px;
  left: 279px;
  top: 197px;
  bottom: 611px;
  z-index: 1000;
  animation: ${({ isGameStart, diceNumber }) =>
    isGameStart &&
    `pirate${diceNumber} ${diceNumber * 2}s ease-in-out 0s forwards`};

  ${pirateAnimation.map(
    (pirateKeyframe, index) => `@keyframes pirate${index} {
   ${pirateKeyframe} }`
  )}
`;
