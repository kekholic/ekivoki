/* eslint-disable comma-dangle */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { connectedToTheGame } from '../../../lib/game/gameUpdate';
import { IGame } from '../../../models/IGame';
import {
  getGame,
} from '../../../store/reducers/actionCreators';
import style from './GameList.module.css';

export default function GameList() {
  const { games } = useAppSelector((store) => store.allGame);
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // TODO:
  // запрос с базы данных активных игр!
  useEffect(() => {
    dispatch(getGame());
  }, []);

  const handleClick = (gameInner: IGame) => {
    connectedToTheGame(String(gameInner.id), user.user);
    navigate(`/game/${gameInner.id}`);
  };

  return (
    <div className={style.listContent}>
      {games.map((gameInner: IGame) => (
        <div className={style.listItem} key={gameInner.id}>
          <span className={style.listTitle}>{gameInner.title}</span>
          <input className={style.listInput} type="text" name="password" placeholder="Введите пароль" />
          <button className={style.listSubmit} type="submit" onClick={() => handleClick(gameInner)}>Выбрать игру</button>
        </div>
      ))}
    </div>
  );
}
