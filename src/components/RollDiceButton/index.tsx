import React from 'react';
import { RollDiceButtonWrapper } from './styles';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { diceState, gameState, sidebarState } from '../../recoil/atoms/';
import { useMutation } from 'react-query';
import { createUserAction } from '../../API/createUserAction';

export const RollDiceButton: React.FC = () => {
  const [diceNumber, setDiceNumber] = useRecoilState(diceState);
  const [isGameStarted, setGameState] = useRecoilState(gameState);
  const toggleSidebar = useSetRecoilState(sidebarState);
  const { mutate } = useMutation(createUserAction, {
    retry: 3,
  });

  const rollDiceHandler = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    mutate({ action: `Game started, player rolled ${randomNumber}` });
    setDiceNumber(randomNumber);
    setGameState(true);
    toggleSidebar(false);
  };

  return (
    <>
      <RollDiceButtonWrapper
        onClick={rollDiceHandler}
        isGameStarted={isGameStarted}>
        Roll Dice
      </RollDiceButtonWrapper>
      <img
        style={{ marginBottom: '20px' }}
        src={require(`../../assets/dice/${diceNumber}.png`).default}
        alt={`Dice number `}
      />
    </>
  );
};
