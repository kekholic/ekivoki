/* eslint-disable comma-dangle */
// import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IGame } from '../../../models/IGame';
import {
  getGame,
  incrementCountPlayers,
} from '../../../store/reducers/actionCreators';
import { choiceGame } from '../../../store/reducers/gameSlice';

type Props = {};

export default function GameList({}: Props) {
  const [value, setValue] = useState('');
  const { games } = useAppSelector((store) => store.allGame);
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // TODO:
  // запрос с базы данных активных игр!
  useEffect(() => {
    dispatch(getGame());
  }, []);

  const handleClick = (game: IGame) => {
    dispatch(
      incrementCountPlayers({
        ...game,
        userId: user.id,
        userName: user.username,
      })
    );
    dispatch(choiceGame(game));
    navigate(`/game/${game.id}`);
  };

  return (
    <>
      {games.map((game) => (
        <div key={game.id}>
          <p>{game.title}</p>
          <input
            value={value}
            type="text"
            name="password"
            placeholder="Введите пароль"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button type="submit" onClick={() => handleClick(game)}>
            Выбрать игру
          </button>
        </div>
      ))}
    </>
  );
}
