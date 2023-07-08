/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShort: false,
  error: null,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setIsShort: (state: any) => {
      state.isShort = !state.isShort;
    },
  },
});

export const { setIsShort } = layoutSlice.actions;
export const getLayout = (state: any) => state.layout.isShort;

export default layoutSlice.reducer;
