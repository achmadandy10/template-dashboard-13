'use client';

import { getLayout } from '@/redux';
import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import { useSelector } from 'react-redux';
import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Theme: FC<ComponentProps<typeof Box>> = ({ children }): JSX.Element => {
  const isShort = useSelector(getLayout);

  return (
    <Box height={'100vh'}>
      <Sidebar />
      <Box
        position={'fixed'}
        transition={'ease'}
        transitionDuration={'0.3s'}
        width={isShort ? 'calc(100% - 4.5rem)' : 'calc(100% - 16rem)'}
        left={isShort ? '4.5rem' : '16rem'}
      >
        <Navbar />

        <Box
          as={'main'}
          aria-label={'Main'}
          position={'relative'}
          top={'65px'}
          padding={4}
          zIndex={0}
        >
          {children}

          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Theme;
