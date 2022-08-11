export interface IGame {
  id?: number,
  title: string,
  password?: string,
  countPlayers: number,
  maxPlayers: number,
  isPanding?: boolean,
  isdone?: boolean,
}
