import React, { ReactElement, useEffect, useState } from 'react';
import action from '../../store/actions/action';
import { useAppDispatch } from '../../store/store';

interface IProps {
  auth: boolean;
}

export default function Form({ auth }: IProps): ReactElement {
  const [input, setInput] = useState({ email: '', password: '', username: '' });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (input.email) {
      dispatch(action.authUser(input));
    }
  }, [input]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username?.value || undefined;
    const password = e.target.password.value;
    setInput({ email, password, username });
  };

  return (
    <form onSubmit={submitHandler}>
      {auth
      && (
      <label htmlFor="username">
        Username:
        <input type="text" name="username" />
      </label>
      )}
      <label htmlFor="email">
        Mail:
        <input type="text" name="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
