'use client';

import { Font } from '@/components';
import { persistor, store } from '@/redux';
import { theme } from '@/utils';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} resetCSS>
        <Font />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AnimatePresence mode={'wait'} initial>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </AnimatePresence>
      </ChakraProvider>
    </CacheProvider>
  );
}
