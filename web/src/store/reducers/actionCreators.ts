/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';
import { IData } from '../../models/IData';
import { IDataGame } from '../../models/IDataGame';
import { IGame } from '../../models/IGame';

export const getAuth = createAsyncThunk('auth/getAuth', async (data: any, thunkAPI) => {
  try {
    const res = await $api
      .post<IData>(`/auth/${data.username ? 'registration' : 'login'}`, data);
    localStorage.setItem('token', res.data.accessToken);
    localStorage.setItem('user', JSON.stringify(res.data.user));
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
    localStorage.removeItem('user');
    return res.status;
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});

export const createGame = createAsyncThunk('game/createGame', async (data: IGame, thunkAPI) => {
  try {
    const res = await $api
      .post<IDataGame>('/game', data);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});

export const getGame = createAsyncThunk('allGame/getGame', async (_, thunkAPI) => {
  try {
    const res = await $api
      .get('/game/search');
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});

export const incrementCountPlayers = createAsyncThunk('game/incrementCountPlayers', async (data: Object, thunkAPI) => {
  try {
    const res = await $api
      .patch('/game/add', data);// подготовить к отправке обьект с данными { gameId, userData add:true}
    return res.data; // с бэка обьект типа{username:xxx, userId:x}
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});

export const decrementCountPlayers = createAsyncThunk('game/decrementCountPlayers', async (data: Object, thunkAPI) => {
  try {
    const res = await $api
      .patch('/game/del', data); // подготовить к отправке обьект с данными { gameId, userData add:true}
    return res.data; // с бэка статус
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});

export const startGame = createAsyncThunk('game/startGame', async (data: Object, thunkAPI) => {
  try {
    const res = await $api
      .patch('/game/start', data);// подготовить к отправке обьект с данными { gameId,ipanding: false}
    return res.data; // с бэка статус
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});

export const endGame = createAsyncThunk('game/endGame', async (data: Object, thunkAPI) => {
  try {
    const res = await $api
      .patch('/game/end', data);// подготовить к отправке обьект с данными { gameId, ipanding: false}
    return res.data; // с бэка статус
  } catch (err) {
    return thunkAPI.rejectWithValue('Ошибка');
  }
});
