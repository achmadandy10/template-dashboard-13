/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchProfile: any = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue }: any) => {
    try {
      return null;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state: any, action: any) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    removeUser: (state: any) => {
      state.status = 'idle';
      state.data = null;
    },
  },
  extraReducers: {
    // Get User
    [fetchProfile.pending]: (state: any) => {
      state.status = 'loading';
    },
    [fetchProfile.fulfilled]: (state: any, action: any) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchProfile.rejected]: (state: any, action: any) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const getProfile = (state: any) => state.user.data;

export default userSlice.reducer;
