/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';
import { IUser } from '../../models/IUser';

export const getAuth = createAsyncThunk('auth/getAuth', async (data: any, thunkAPI) => {
  try {
    const res = await $api
      .post<IUser>(`/auth/${data.username ? 'registration' : 'login'}`, data);

    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});

export const getLogout = createAsyncThunk('auth/getLogOut', async (_, thunkAPI) => {
  try {
    const res = await $api
      .post('/auth/logout');
    return res.status;
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});
