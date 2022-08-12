// NOTE: CHECK SUBMIT HANDLER DOUBLE TYPES
import React, { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { getAuth } from '../../store/reducers/actionCreators';
import style from './Form.module.css';

interface IProps {
  auth: boolean;
}

export default function Form({ auth }: IProps): ReactElement {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  interface IInput {
    email: string;
    password: string;
    username: string | undefined
  }

  const [input, setInput] = useState<IInput>({ email: '', password: '', username: '' });

  useEffect(() => {
    if (input.email) {
      dispatch(getAuth(input));
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
    <div className={style.form}>
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
    </div>
  );
}
