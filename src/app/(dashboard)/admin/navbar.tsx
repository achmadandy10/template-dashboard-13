'use client';

import { Navbar as NavbarComponent } from '@/components';
import { Box, Divider } from '@chakra-ui/react';
import { FC } from 'react';
import { IoMailOutline, IoNotificationsOutline } from 'react-icons/io5';

const Navbar: FC = (): JSX.Element => {
  return (
    <NavbarComponent>
      <Box display={'flex'} alignItems={'center'} gap={4}>
        <NavbarComponent.ToggleButton />
        <NavbarComponent.Search />
      </Box>

      <Box display={'flex'} alignItems={'center'} gap={4}>
        <NavbarComponent.Items>
          <NavbarComponent.ItemGroup>
            <NavbarComponent.Item icon={IoNotificationsOutline} />
            <NavbarComponent.Item icon={IoMailOutline} />
          </NavbarComponent.ItemGroup>
        </NavbarComponent.Items>

        <Divider orientation={'vertical'} height={'25px'} />

        <NavbarComponent.Avatar src={'/favicon.ico'} alt={'Avatar'}>
          <NavbarComponent.AvatarItems>
            <NavbarComponent.AvatarItemGroup title={'Profile'}>
              <NavbarComponent.AvatarItem>Menu 1</NavbarComponent.AvatarItem>
              <NavbarComponent.AvatarItem>Menu 2</NavbarComponent.AvatarItem>
              <NavbarComponent.AvatarItem>Menu 3</NavbarComponent.AvatarItem>
            </NavbarComponent.AvatarItemGroup>
            <NavbarComponent.AvatarDivider />
            <NavbarComponent.AvatarItemGroup title={'Help'}>
              <NavbarComponent.AvatarItem>Menu 1</NavbarComponent.AvatarItem>
              <NavbarComponent.AvatarItem>Menu 2</NavbarComponent.AvatarItem>
              <NavbarComponent.AvatarItem>Menu 3</NavbarComponent.AvatarItem>
            </NavbarComponent.AvatarItemGroup>
          </NavbarComponent.AvatarItems>
        </NavbarComponent.Avatar>
      </Box>
    </NavbarComponent>
  );
};

export default Navbar;
