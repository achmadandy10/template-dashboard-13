'use client';

import { Footer as FooterComponent } from '@/components';
import { FC } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <FooterComponent
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <FooterComponent.Copyright year={'2023'} by={'PT. PT'} />
    </FooterComponent>
  );
};

export default Footer;
