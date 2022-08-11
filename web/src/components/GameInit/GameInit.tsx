import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { createGame } from '../../store/reducers/actionCreators';

type Props = {};

export default function GameInit({}: Props) {

  interface IInputGame {
    title: string;
    password: string;
    maxPlayers: number |undefined;
  };

  const dispatch = useAppDispatch();

  const [input, setInput] = useState({ title: '', password: '', maxPlayers: 6 });

  const submitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      password: { value: string };
      maxPlayers?: { value: number |undefined};
    };
    const title = target.title.value;
    const password = target.password.value;
    const maxPlayers = target.maxPlayers?.value || 6;
    setInput({ title, password, maxPlayers });
  };

  useEffect(() => {
    if (input) {
      dispatch(createGame(input));
    }
  }, [input]);

  // редирект в комнату игры?

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" />
        <input type="password" name="password" />

        <select name="maxPlayers">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button type="submit">создать игру</button>
      </form>
    </div>
  );
}
