// NOTE: CHECK SUBMIT HANDLER DOUBLE TYPES
import React, { ReactElement, useEffect, useState } from 'react';
import action from '../../store/actions/action';
import { useAppDispatch } from '../../store/store';

interface IProps {
  auth: boolean;
}

export default function Form({ auth }: IProps): ReactElement {
  const dispatch = useAppDispatch();
  interface IInput {
    email: string;
    password: string;
    username: string | undefined
  }

  const [input, setInput] = useState<IInput>({ email: '', password: '', username: '' });

  useEffect(() => {
    if (input.email) {
      dispatch(action.authUser(input));
    }
  }, [input]);

  const submitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      username?: { value: string | undefined }
    };
    const email = target.email.value;
    const username = target.username?.value;
    const password = target.password.value;
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
