import React, { useEffect, useRef } from 'react';
import Pirate from '../../assets/Pirate.png';
import { PirateWrapper } from './styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { gameState, diceState, modalState } from '../../recoil/atoms';
import { createUserAction } from '../../API/createUserAction';
import { messages } from '../../data/messages';

export const PiratePlayer: React.FC = () => {
  const isGameStart = useRecoilValue(gameState);
  const diceNumber = useRecoilValue(diceState);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleModal = useSetRecoilState(modalState);
  const { mutate } = useMutation(createUserAction, {
    retry: 3,
  });

  console.log(diceNumber);

  const gameEndHandler = () => {
    mutate({
      action: `Game over, user landed on island ${diceNumber} and was ${messages[diceNumber]?.subText}}`,
    });
    setTimeout(() => {
      toggleModal(true);
    }, 800);
  };

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    });
  }, []);

  return (
    <PirateWrapper
      onAnimationEnd={gameEndHandler}
      isGameStart={isGameStart}
      diceNumber={diceNumber}>
      <input type='hidden' ref={inputRef} />
      <img src={Pirate} alt='Sea background' />
    </PirateWrapper>
  );
};
