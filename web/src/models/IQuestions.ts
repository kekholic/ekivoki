export interface IQuestions {
  list: IList[],
  current: number,
}

interface IList {
  questionForHost: string,
  questionForPlayers: string,
  theme: string,
  task: string,
  exceptions: string,
  id: number,
  type: number
}
