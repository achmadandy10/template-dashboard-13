import { setIsShort } from '@/redux';
import { IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

const NavbarToggleButton: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleIsShortClick = () => dispatch(setIsShort());

  return (
    <IconButton
      icon={<IoMenuOutline />}
      aria-label={'Icon Navbar Toggle Button'}
      size={'sm'}
      borderRadius={'lg'}
      onClick={handleIsShortClick}
    />
  );
};

export default NavbarToggleButton;
