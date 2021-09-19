import React from 'react';
import { HandIconWrapper } from './styles';
import { FaRegHandPaper } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import { browseMapState } from '../../recoil/atoms/browseMap';
interface HandIconProps {}

export const HandIcon: React.FC<HandIconProps> = () => {
  const setBrowseMap = useSetRecoilState(browseMapState);
  return (
    <HandIconWrapper onClick={() => setBrowseMap(prevState => !prevState)}>
      <div className='white_background'>
        <FaRegHandPaper size='3rem' />
      </div>
      <span>Browse Map</span>
    </HandIconWrapper>
  );
};
