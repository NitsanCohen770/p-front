import styled from 'styled-components';

interface RollDiceButtonWrapperProps {
  isGameStarted: boolean;
}

export const RollDiceButtonWrapper = styled.div<RollDiceButtonWrapperProps>`
  font-size: 61px;
  color: #ffffff;
  font-weight: 400;
  text-align: center;
  width: 314px;
  height: 98px;
  border-radius: 10px;
  background-color: #db4d00;
  cursor: pointer;
  box-shadow: 10px 2px 5px -3px #888;
  pointer-events: ${({ isGameStarted }) => isGameStarted && 'none'};
  user-select: none;
`;
