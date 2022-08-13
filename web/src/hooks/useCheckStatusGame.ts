import { useEffect, useState } from 'react';
import $api from '../http';

export default function checkStatusGame(id: number) {
  const [isDone, setisDone] = useState(false);

  async function getStatusGame() {
    try {
      const { data } = await $api.post(`${process.env.REACT_APP_API_URL}/game/checkStatusGame`, { id });
      return data;
    } catch (error) {
      console.log(error);
      throw Error;
    }
  }

  useEffect(() => {
    getStatusGame()
      .then((data) => { setisDone(data); });
  }, [id]);

  return isDone;
}
