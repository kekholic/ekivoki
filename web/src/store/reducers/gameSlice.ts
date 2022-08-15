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
  playersPriority: Array<IplayersPriority>;
  isHost: number;
  progress: Iprogress;
  isLoading: boolean;
  error: string;
}

interface IplayersPriority {
  userId: number;
  username: string;
}
interface Iprogress {
  [key: string]: number;
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
    list: [
      {
        questionForHost: '',
        questionForPlayers: '',
        id: 0,
        type: 0,
      },
    ],
    current: 1,
  },
  isCanvas: false,
  playersPriority: [],
  isHost: 0,
  progress: {},
  isLoading: false,
  error: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateGameState(state, action: PayloadAction<GameState>) {
      // console.log(action.payload, 'ACTION PAYLOAD');

      state.game = { ...action.payload.game };
      state.questions.list = [...action.payload.questions.list];
      state.questions.current = action.payload.questions.current;
      state.isCanvas = false;
      state.playersPriority = action.payload.playersPriority;
      state.progress = action.payload.progress;
      state.isHost = action.payload.isHost;
      state.isLoading = false;
      state.error = '';
    },
    playerJoinedUpdateState(state, action: PayloadAction<any>) {
      state.game.countPlayers += 1;
      // console.log('action: ', action.payload);
      const temp = {
        username: action.payload.username,
        userId: action.payload.id,
      };
      state.playersPriority.push(temp);
      state.isHost =
        state.isHost > action.payload.id ? action.payload.id : state.isHost;
      state.game.isPanding = state.game.countPlayers !== state.game.maxPlayers;
    },
    correctAnswer(state, action: PayloadAction<any>) {
      console.log('action correctanswer: ', action.payload);
      state.progress = {
        ...state.progress,
        [action.payload.progress.userId]: action.payload.progress.score,
      };
      state.isHost = action.payload.isHost;
      state.questions.current = action.payload.current;
    },
  },
  extraReducers: {
    // register new game
    [createGame.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = '';
      state.game = action.payload.game;

      state.isHost = action.payload.user.userId;
      state.questions.list = [...action.payload.questions];
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
      action: PayloadAction<IplayersPriority>
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
      action: PayloadAction<string>
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
      action: PayloadAction<string>
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
    [playersConnection.fulfilled.type]: (
      state,
      action: PayloadAction<GameState>
    ) => {
      state.game = action.payload.game;
      state.playersPriority = action.payload.playersPriority;
      state.isHost = action.payload.isHost;
      state.error = '';
      state.isLoading = false;
    },
    [playersConnection.pending.type]: (state) => {
      state.isLoading = true;
    },
    [playersConnection.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;

      state.error = action.payload;
    },
    // 1 изменять поле игроков:done
    // 2 отбновлять данные в бд:done
    // 3 обновлять статус игры началась ждем игроков кончилась
    // нажал вступить в игру у тебя обновился стейт с игрой
  },
});
export const { updateGameState, playerJoinedUpdateState, correctAnswer } =
  gameSlice.actions;

export default gameSlice.reducer;
