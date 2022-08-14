export interface IQuestions {
  list: IList[],
  current: number,
}

interface IList {
  questionForHost: string,
  questionForPlayers: string,
  id: number,
  type: number
}
