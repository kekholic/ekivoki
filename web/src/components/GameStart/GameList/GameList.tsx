/* eslint-disable comma-dangle */
// import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IGame } from '../../../models/IGame';
import {
  getGame,
  incrementCountPlayers,
  playersConnection,
} from '../../../store/reducers/actionCreators';
import { choiceGame } from '../../../store/reducers/gameSlice';

type Props = {};

let aaap = false;

export default function GameList({}: Props) {
  const [value, setValue] = useState('');
  const { games } = useAppSelector((store) => store.allGame);
  const { game } = useAppSelector((store) => store);
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // TODO:
  // запрос с базы данных активных игр!
  useEffect(() => {
    dispatch(getGame());
  }, []);

  const handleClick = (gameInner: IGame) => {
    dispatch(playersConnection({ id: gameInner.id, user }));
    // dispatch(choiceGame(game));
    aaap = true;
  };

  useEffect(() => {
    if (game.playersPriority.length > 1) navigate(`/game/${game.game.id}`);
  }, [game]);

  return (
    <>
      {games.map((gameInner) => (
        <div key={gameInner.id}>
          <p>{gameInner.title}</p>
          <input
            value={value}
            type='text'
            name='password'
            placeholder='Введите пароль'
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button type='submit' onClick={() => handleClick(gameInner)}>
            Выбрать игру
          </button>
        </div>
      ))}
    </>
  );
}
