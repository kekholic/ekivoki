// import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react';

type Props = {}

export default function GameList({ }: Props) {
  const [gameList, setGameList] = useState(['']);
  // TODO:
  // запрос с базы данных активных игр!
  useEffect(() => {
    const games = ['Первая', 'Вторая', 'Третья'];
    setGameList(games);
  }, []);

  const handleClick = (e: React.SyntheticEvent) => {
    console.log(e.target);
  };

  return (
    <>
      {gameList.map((game: any) => (
        <div
          key={game}
          onClick={handleClick}
        >
          {' '}
          {game}
        </div>
      ))}
    </>
  );
}
