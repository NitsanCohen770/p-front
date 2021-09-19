import {
  SeaBackground,
  Islands,
  WavesAnimation,
  PiratePlayer,
  Modal,
  ShipPlayer,
  SideBar,
} from './components';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { FaBars } from 'react-icons/fa';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useMediaQuery } from 'react-responsive';
import { browseMapState } from './recoil/atoms';
import { sidebarDisplayState, sidebarState } from './recoil/atoms/sidebar';
import { ModalWrapper } from './components/Modal/styles';

function App() {
  const browseMap = useRecoilValue(browseMapState);
  const toggleSidebar = useSetRecoilState(sidebarState);
  const [displaySidebar, setDisplaySidebar] =
    useRecoilState(sidebarDisplayState);
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  const openSidebarHandler = () => {
    setDisplaySidebar(true);
    toggleSidebar(true);
  };

  if (isPortrait) {
    return (
      <ModalWrapper isModalOpen>
        {' '}
        <h2>We're Sorry!</h2>
        <h2>Portrait view is not supported at the moment</h2>
        <h1>Please flip the device :)</h1>
      </ModalWrapper>
    );
  } else {
    return (
      <>
        <Modal />
        <SideBar />
        {!displaySidebar && (
          <FaBars
            className='open_sidebar'
            size='2rem'
            onClick={openSidebarHandler}
          />
        )}
        <ScrollContainer
          vertical={browseMap}
          horizontal={browseMap}
          className='scroll'>
          <ShipPlayer />
          <SeaBackground />
          <WavesAnimation />
          <PiratePlayer />
          <Islands />
        </ScrollContainer>
      </>
    );
  }
}

export default App;
