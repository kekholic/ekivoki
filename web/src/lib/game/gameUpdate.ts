import { IUser } from '../../models/IUser';
import socket from '../../socket';
import { GameState } from '../../store/reducers/gameSlice';

export function sendMessageGameState(
  game: GameState,
  id: string | undefined,
  user: IUser,
): void {
  socket.emit('game', {
    game,
    roomID: id,
    user,
    method: 'initState',
  });
}

export function IAEBAL(): void {}
