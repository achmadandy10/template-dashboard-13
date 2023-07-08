import { Box as BoxChakra } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';

type BoxProps = ComponentProps<typeof BoxChakra>;

export const Box: FC<BoxProps> = ({ children, ...props }) => {
  return <BoxChakra {...props}>{children}</BoxChakra>;
};
