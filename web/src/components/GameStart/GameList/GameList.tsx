/* eslint-disable comma-dangle */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { connectedToTheGame } from '../../../lib/game/gameUpdate';
import { IGame } from '../../../models/IGame';
// import socket from '../../../socket';
import {
  getGame,
  // playersConnection,
} from '../../../store/reducers/actionCreators';

export default function GameList() {
  const [value, setValue] = useState('');
  const { games } = useAppSelector((store) => store.allGame);
  // const { game } = useAppSelector((store) => store);
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // TODO:
  // запрос с базы данных активных игр!
  useEffect(() => {
    dispatch(getGame());
  }, []);

  const handleClick = (gameInner: IGame) => {
    // dispatch(playersConnection({ id: gameInner.id, user: user.user }));
    connectedToTheGame(String(gameInner.id), user.user);
    navigate(`/game/${gameInner.id}`);
  };

  // useEffect(() => {
  //   if (game.playersPriority.length > 1);
  // }, [game]);

  return (
    <>
      {games.map((gameInner: IGame) => (
        <div key={gameInner.id}>
          <p>{gameInner.title}</p>
          <input
            value={value}
            type="text"
            name="password"
            placeholder="Введите пароль"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button type="submit" onClick={() => handleClick(gameInner)}>
            Выбрать игру
          </button>
        </div>
      ))}
    </>
  );
}
