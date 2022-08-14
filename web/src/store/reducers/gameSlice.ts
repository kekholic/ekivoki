/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from '../../models/IGame';
import { IQuestions } from '../../models/IQuestions';
import {
  createGame,
  decrementCountPlayers,
  endGame,
  incrementCountPlayers,
  playersConnection,
  startGame,
} from './actionCreators';

export interface GameState {
  game: IGame;
  questions: IQuestions;
  isCanvas: boolean;
  playersPriority: Array<Object>;
  isHost: number;
  progress: Array<Object>;
  isLoading: boolean;
  error: string;
}

interface IJoinedPlayer {
  playersPriority: Object[];
  isHost: number;
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
  questions: {
    list: [{}],
    current: 0,
  },
  isCanvas: false,
  playersPriority: [],
  isHost: 0,
  progress: [],
  isLoading: false,
  error: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateGameState(state, action: PayloadAction<GameState>) {
      console.log(action.payload, 'ACTION PAYLOAD');

      state.game = { ...action.payload.game };
      state.questions = { ...action.payload.questions };
      state.isCanvas = false;
      state.playersPriority = action.payload.playersPriority;

      state.isHost = action.payload.isHost;
      state.isLoading = false;
      state.error = '';
    },
    playerJoinedUpdateState(state, action: PayloadAction<any>) {
      state.game.countPlayers += 1;
      console.log(action.payload);
      state.playersPriority.push({ userId: action.payload.id, username: action.payload.username });
      state.isHost = (state.isHost > action.payload.id) ? action.payload.id : state.isHost;
    },

  },
  extraReducers: {
    // register new game
    [createGame.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = '';
      state.game = action.payload.game;
      // console.log('AAAAAAAAAAAAAAA', action.payload);

      state.isHost = action.payload.user.userId;
      state.questions = { ...action.payload.questions };
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
      state.isHost = action.payload.isHost;
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
export const { updateGameState, playerJoinedUpdateState } = gameSlice.actions;

export default gameSlice.reducer;
