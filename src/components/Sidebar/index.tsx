import React from 'react';
import { useRecoilState } from 'recoil';
import { HandIcon, RollDiceButton } from '..';
import { FaWindowClose } from 'react-icons/fa';
import { SidebarWrapper } from './styles';
import { sidebarState } from '../../recoil/atoms';
import { sidebarDisplayState } from '../../recoil/atoms/sidebar';

export const SideBar: React.FC = () => {
  const [isSidebarOpen, toggleSidebar] = useRecoilState(sidebarState);
  const [displaySidebar, setDisplaySidebar] =
    useRecoilState(sidebarDisplayState);

  const displaySidebarHandler = () =>
    isSidebarOpen ? setDisplaySidebar(true) : setDisplaySidebar(false);

  return (
    <>
      <SidebarWrapper
        isSidebarOpen={isSidebarOpen}
        displaySidebar={displaySidebar}
        onAnimationEnd={displaySidebarHandler}>
        <FaWindowClose
          className='close-button'
          size='2rem'
          onClick={() => toggleSidebar(false)}
        />
        <HandIcon />
        <RollDiceButton />
      </SidebarWrapper>
    </>
  );
};
