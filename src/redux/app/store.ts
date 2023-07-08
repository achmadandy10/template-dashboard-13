/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import layout from '../reducers/layout';
import user from '../reducers/user';

const persistConfig = {
  key: 'storage',
  storage,
  whitelist: ['layout'],
};

const combinedReducer = combineReducers({
  layout,
  user,
});

const loadFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const persistedReducer = (state: any, action: any) => {
  if (action.type === 'persist/REHYDRATE' && action.payload) {
    if (action.payload.layout && action.payload.layout.error instanceof Error) {
      action.payload.layout.error = action.payload.layout.error.toString();
    }
  }
  return persistReducer(persistConfig, combinedReducer)(state, action);
};

const saveToSessionStorage =
  ({ getState }: any) =>
  (next: any) =>
  (action: any) => {
    const filteredAction = { ...action };
    if (filteredAction.register) {
      delete filteredAction.register;
    }
    const returnValue = next(action);
    const state: any = getState();
    const whitelist = ['layout', '_persist'];
    const filteredState = whitelist.reduce((acc: any, key: any) => {
      // eslint-disable-next-line no-prototype-builtins
      if (state.hasOwnProperty(key)) {
        acc[key] = state[key];
      }
      return acc;
    }, {});
    if (filteredState.layout && filteredState.layout.error instanceof Error) {
      filteredState.layout.error = filteredState.layout.error.toString();
    }
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('reduxState', JSON.stringify(filteredState));
    }
    return returnValue;
  };

const makeStore = () => {
  const preloadedState = loadFromSessionStorage();
  return configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), saveToSessionStorage],
    preloadedState,
  });
};

const store = makeStore();
const persistor = persistStore(store);

if (typeof window !== 'undefined') {
  window.onbeforeunload = () => {
    sessionStorage.removeItem('reduxState');
  };
}

if (typeof window !== 'undefined') {
  window.onload = () => {
    // const savedState = loadFromSessionStorage();
    // if (
    //   (savedState && savedState.layout.status === 'failed') ||
    //   savedState.failed.status === 'loading'
    // ) {
    //   store.dispatch(fetchProfile());
    // }
  };
}

export { persistor, store };
