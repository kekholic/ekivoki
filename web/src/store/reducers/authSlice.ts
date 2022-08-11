/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { getAuth, getLogout } from './actionCreators';

interface UserState {
  user: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: {
    appruvedMail: false,
    email: '',
    id: 0,
    username: '',
  },
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // register and login reducers
    [getAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    [getAuth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAuth.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // logout reducers
    [getLogout.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.user = initialState.user;
      state.error = '';
    },
    [getLogout.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getLogout.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
