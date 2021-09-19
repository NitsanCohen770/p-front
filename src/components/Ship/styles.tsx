import styled from 'styled-components';

export const ShipWrapper = styled.div`
  position: absolute;
  right: 0;
  left: -90px;
  top: 0;
  bottom: 0;
  height: 100%;
  transition: all 1s ease-in-out;
  animation: ship 30s linear infinite;
  z-index: 1000;
  opacity: 1;

  @keyframes ship {
    0% {
      top: 500px;
      left: 0;
      opacity: 1;
    }
    20% {
      top: 550px;
      left: 400px;
      opacity: 1;
    }
    30% {
      top: 600px;
      left: 600px;
      opacity: 1;
    }
    40% {
      top: 800px;
      left: 800px;
      opacity: 1;
    }
    50% {
      top: 900px;
      left: 1000px;
      opacity: 1;
    }
    60% {
      top: 1000px;
      left: 1100px;
      opacity: 1;
    }
    70% {
      top: 1100px;
      left: 1300px;
    }
    80% {
      top: 1200px;
      left: 1400px;
      transform: rotate(-20deg);
    }
    90% {
      top: 1200px;
      left: 1900px;
      transform: rotate(-20deg);
      opacity: 0.5;
    }
    100% {
      top: 1200px;
      left: 2200px;
      transform: rotate(-20deg);
      opacity: 0;
    }
  }
`;
