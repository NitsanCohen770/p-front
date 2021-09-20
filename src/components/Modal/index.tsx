import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { fetchRandomMessage } from '../../API/fetchRandomMessage';
import { messages, rumMessages } from '../../data/messages';
import {
  diceState,
  gameState,
  modalState,
  sidebarState,
} from '../../recoil/atoms';
import { ModalWrapper } from './styles';
import { sidebarDisplayState } from '../../recoil/atoms/sidebar';

interface ModalMessages {
  mainText: string;
  subText: string | undefined;
  winner: boolean;
}

export const Modal: React.FC = () => {
  const [isModalOpen, toggleModal] = useRecoilState(modalState);
  const diceNumber = useRecoilValue(diceState);
  const resetGame = useSetRecoilState(gameState);
  const toggleSidebar = useSetRecoilState(sidebarState);
  const toggleSidebarDisplay = useSetRecoilState(sidebarDisplayState);
  const [modalMessages, setModalMessages] = useState<ModalMessages | null>(
    messages[diceNumber]
  );
  const [funnyMessage, setFunnyMessage] =
    useState<{ message: string } | undefined>(undefined);

  useEffect(() => {
    if (diceNumber === 5) {
      (async () => {
        const funnyMessage = await fetchRandomMessage();
        setFunnyMessage(funnyMessage);
      })();
    }
  }, [diceNumber]);

  useEffect(() => {
    setModalMessages(messages[diceNumber]);
    const randomNumber = Math.round(Math.random());
    if (diceNumber === 2) {
      return setModalMessages(rumMessages[randomNumber]);
    }
    if (diceNumber === 5) {
      setModalMessages({
        mainText: '',
        subText: funnyMessage?.message,
        winner: true,
      });
    }
  }, [diceNumber, funnyMessage]);

  const resetGameHandler = () => {
    toggleModal(false);
    resetGame(false);
    toggleSidebar(true);
    toggleSidebarDisplay(true);
  };

  return (
    <ModalWrapper isModalOpen={isModalOpen}>
      <h2>{modalMessages?.winner ? 'Great' : 'Oh, too bad!'}</h2>
      <h2>{modalMessages?.subText}</h2>
      <h1>{modalMessages?.mainText}</h1>
      <div className='restart_button' onClick={resetGameHandler}>
        Try Again
      </div>
    </ModalWrapper>
  );
};
