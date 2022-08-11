/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';
import { IData } from '../../models/IData';

export const getAuth = createAsyncThunk('auth/getAuth', async (data: any, thunkAPI) => {
  try {
    const res = await $api
      .post<IData>(`/auth/${data.username ? 'registration' : 'login'}`, data);
    localStorage.setItem('token', res.data.accessToken);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});

export const getLogout = createAsyncThunk('auth/getLogOut', async (_, thunkAPI) => {
  try {
    const res = await $api
      .post('/auth/logout');
    localStorage.removeItem('token');
    return res.status;
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});
