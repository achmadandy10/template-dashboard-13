import { getLayout } from '@/redux';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import { useSelector } from 'react-redux';
import SidebarCTA from './SidebarCTA';
import SidebarCollapse from './SidebarCollapse';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';
import SidebarToggleTheme from './SidebarThemeToggle';

type SidebarCompnentProps = ComponentProps<typeof Box>;

const SidebarComponent: FC<SidebarCompnentProps> = ({
  children,
  ...props
}): JSX.Element => {
  const isShort = useSelector(getLayout);
  return (
    <Box
      as={'aside'}
      aria-label={'Sidebar'}
      position={'fixed'}
      transition={'ease'}
      transitionDuration={'0.3s'}
      width={isShort ? '4.5rem' : '16rem'}
      height={'full'}
      background={useColorModeValue('lightFirst', 'darkFirst')}
      zIndex={999}
      {...props}
    >
      <Box>{children}</Box>
    </Box>
  );
};

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
  ThemeToggle: SidebarToggleTheme,
});
