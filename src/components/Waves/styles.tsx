import styled from 'styled-components';

export const WavesWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  transition: all 1s ease-in-out;
  animation: waves 1.7s infinite;

  @keyframes waves {
    0% {
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      opacity: 1;
    }
    50% {
      right: 5rem;
      left: 5rem;
      top: 5rem;
      bottom: 5rem;
      opacity: 0.5;
    }
    100% {
      right: 5rem;
      left: 5rem;
      top: 5rem;
      bottom: 5rem;
      opacity: 0;
    }
  }
`;
