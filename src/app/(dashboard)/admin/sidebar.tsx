'use client';

import { Sidebar as SidebarComponent } from '@/components';
import { FC } from 'react';
import { IoBookmarkOutline, IoHomeOutline } from 'react-icons/io5';

const Sidebar: FC = (): JSX.Element => {
  return (
    <SidebarComponent>
      <SidebarComponent.Logo href={'/'} img={'/favicon.ico'} imgAlt={'Logo'}>
        Logo
      </SidebarComponent.Logo>

      <SidebarComponent.Items>
        <SidebarComponent.ItemGroup>
          <SidebarComponent.Item href={'/admin'} icon={IoHomeOutline}>
            Dashboard
          </SidebarComponent.Item>

          <SidebarComponent.Collapse
            icon={IoBookmarkOutline}
            name={'Components'}
            hrefList={['/card', '/input']}
          >
            <SidebarComponent.Item href={'/card'} submenu>
              Card
            </SidebarComponent.Item>
            <SidebarComponent.Item href={'/input'} submenu>
              Input
            </SidebarComponent.Item>
          </SidebarComponent.Collapse>
        </SidebarComponent.ItemGroup>
        <SidebarComponent.ItemGroup>
          <SidebarComponent.ThemeToggle />
        </SidebarComponent.ItemGroup>
      </SidebarComponent.Items>
    </SidebarComponent>
  );
};

export default Sidebar;
