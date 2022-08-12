/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { setTimeout } from 'timers/promises';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  createGame,
  incrementCountPlayers,
} from '../../store/reducers/actionCreators';

export default function GameInit() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const game = useAppSelector((store) => store.game);
  const { user } = useAppSelector((store) => store.user);
  
  const [input, setInput] = useState({
    title: '',
    password: '',
    maxPlayers: 6,
    countPlayers: 0,
  });
  
  const submitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      password: { value: string };
      maxPlayers?: { value: number | undefined };
    };
    const title = target.title.value;
    const password = target.password.value;
    const maxPlayers = target.maxPlayers?.value || 6;
    setInput({
      title,
      password,
      maxPlayers,
      countPlayers: 1,
    });
  };
  
  useEffect(() => {
    if (input.title) {
      console.log('user: ', user);
      dispatch(createGame({ ...input, ...user.user }));
    }
  }, [input]);

  useEffect(() => {
    if (game.game.id && !game.isLoading) {
      navigate(`/game/${game.game.id}`);
    }
  }, [game]);

  // редирект в комнату игры?

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type='text' name='title' />
        <input type='password' name='password' />

        <select name='maxPlayers'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
        </select>
        <button type='submit'>создать игру</button>
      </form>
    </div>
  );
}
