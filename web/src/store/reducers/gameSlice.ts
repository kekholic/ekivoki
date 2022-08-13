/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from '../../models/IGame';
import {
  createGame,
  decrementCountPlayers,
  endGame,
  incrementCountPlayers,
  playersConnection,
  startGame,
} from './actionCreators';

interface GameState {
  game: IGame;
  isCanvas: boolean;
  playersPriority: Array<Object>;
  isHost: number | null;
  progress: Array<Object>;
  isLoading: boolean;
  error: string;
}

const initialState: GameState = {
  game: {
    id: 0,
    title: '',
    password: '',
    countPlayers: 0,
    maxPlayers: 6,
    isPanding: true,
    isdone: false,
  },
  isCanvas: false,
  playersPriority: [],
  isHost: null,
  progress: [],
  isLoading: false,
  error: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    choiceGame(state, action: PayloadAction<IGame>) {
      state.game = action.payload;
    },
  },
  extraReducers: {
    // register new game
    [createGame.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = '';
      state.game = action.payload.game;
      state.playersPriority.push(action.payload.user);
    },
    [createGame.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createGame.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [incrementCountPlayers.fulfilled.type]: (
      state,
      action: PayloadAction<Object>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.game.countPlayers += 1;
      state.playersPriority.push(action.payload);
    },
    [incrementCountPlayers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [incrementCountPlayers.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [decrementCountPlayers.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.game.countPlayers -= 1;
      state.playersPriority.pop();
    },
    [decrementCountPlayers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [decrementCountPlayers.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [startGame.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.game.isPanding = false;
    },
    [startGame.pending.type]: (state) => {
      state.isLoading = true;
    },
    [startGame.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [endGame.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.game.isdone = true;
    },
    [endGame.pending.type]: (state) => {
      state.isLoading = true;
    },
    [endGame.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [playersConnection.fulfilled.type]: (state, action: PayloadAction<GameState>) => {
      state.game = action.payload.game;
      state.playersPriority = action.payload.playersPriority;

      state.error = '';
      state.isLoading = false;
    },
    [playersConnection.pending.type]: (state) => {
      state.isLoading = true;
    },
    [playersConnection.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;

      state.error = action.payload;
    },
    // 1 изменять поле игроков:done
    // 2 отбновлять данные в бд:done
    // 3 обновлять статус игры началась ждем игроков кончилась
    // нажал вступить в игру у тебя обновился стейт с игрой
  },
});
export const { choiceGame } = gameSlice.actions;

export default gameSlice.reducer;
