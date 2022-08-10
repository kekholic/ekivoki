/* eslint-disable no-empty-pattern */
import React, { ReactElement, useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import './Auth.module.css';

import action from '../../store/actions/action';
import { useAppDispatch } from '../../store/store';

type Props = {}

export default function Auth({ }: Props): ReactElement {
  const [input, setInput] = useState({ email: '', password: '', username: '' });
  const dispatch = useAppDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value || undefined;
    const password = e.target.password.value;
    setInput({ email, password, username });
  };
  useEffect(() => {
    if (input.email) {
      dispatch(action.authUser(input));
    }

    return () => {
      // second
    };
  }, [input]);

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">
        Username:
        <input type="text" name="username" />

      </label>
      {' '}
      <br />
      <label htmlFor="email">
        Mail:
        <input type="text" name="email" />

      </label>
      {' '}
      <br />
      <label htmlFor="password">
        Password:
        <input type="password" name="password" />

      </label>
      {' '}
      <br />
      <Button>Submit</Button>
    </form>
  );
}
