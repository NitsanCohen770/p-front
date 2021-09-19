import styled from 'styled-components';
import { IslandWrapperProps } from '../../shared/interfaces';
export const IslandWrapper = styled.div<IslandWrapperProps>`
  position: absolute;
  right: ${({ position: { rightPos } }) => rightPos};
  left: ${({ position: { leftPos } }) => leftPos};
  top: ${({ position: { topPos } }) => topPos};
  bottom: ${({ position: { bottomPos } }) => bottomPos};
`;
