/* eslint-disable react-hooks/rules-of-hooks */
import { getLayout } from '@/redux';
import { Link } from '@chakra-ui/next-js';
import { Box, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import type { ComponentProps, FC } from 'react';
import { useSelector } from 'react-redux';

export type LabelColor =
  | 'transparent'
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'gray';

type SidebarItemProps = ComponentProps<typeof ListItem> & {
  href: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: LabelColor;
  submenu?: boolean;
};

const SidebarItem: FC<SidebarItemProps> = ({
  href,
  icon: Icon,
  label,
  labelColor = 'transparent',
  submenu,
  children,
  ...props
}) => {
  const isShort = useSelector(getLayout);
  const pathname = usePathname();

  return (
    <ListItem
      marginBottom={isShort && submenu ? 1 : 2}
      _last={{
        marginBottom: isShort && submenu ? 0 : 2,
      }}
      _notLast={{
        paddingBottom: isShort && submenu ? 1 : 0,
        borderBottom: '1px solid',
        borderColor: isShort && submenu ? 'gray.200' : 'transparent',
      }}
      {...props}
    >
      <Link
        href={href}
        position={isShort && !submenu ? 'relative' : 'unset'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={isShort && !submenu ? 'center' : 'space-between'}
        transition={'ease'}
        transitionDuration={'0.3s'}
        padding={submenu ? 0 : 2}
        borderRadius={submenu ? 'none' : 'lg'}
        background={
          submenu
            ? 'transparent'
            : pathname.includes(href)
            ? 'colorOne'
            : useColorModeValue('gray.50', 'darkSecond')
        }
        color={
          submenu
            ? pathname.includes(href)
              ? 'colorOne'
              : useColorModeValue('darkFirst', 'lightFirst')
            : pathname.includes(href)
            ? 'lightFirst'
            : useColorModeValue('darkFirst', 'lightFirst')
        }
        _hover={{
          background: submenu ? 'transparent' : 'colorOne',
          color: submenu ? 'colorOne' : 'lightFirst',
        }}
      >
        <Box display={'flex'} alignItems={'center'} gap={2}>
          {Icon && <Icon />}
          {(isShort && !submenu) || <Text fontSize={'xs'}>{children}</Text>}
        </Box>

        {label && (
          <Box
            position={isShort && !submenu ? 'absolute' : 'unset'}
            right={isShort && !submenu ? -2 : 0}
            top={isShort && !submenu ? -1 : 0}
            as={'span'}
            padding={1}
            fontSize={isShort && !submenu ? '8px' : '10px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'md'}
            background={labelColor}
            color={labelColor === 'transparent' ? 'lightFirst' : 'darkFirst'}
          >
            {label}
          </Box>
        )}
      </Link>
    </ListItem>
  );
};

export default SidebarItem;
