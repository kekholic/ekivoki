/* eslint-disable jsx-a11y/label-has-associated-control */
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
    <div className={style.authForm}>
      <form className={style.submitForm} onSubmit={submitHandler}>
        {auth
        && (
          <>
            <label className={style.label} htmlFor="username">Имя</label>
            <input type="text" name="username" id="username" />
          </>
        )}
        <label className={style.label} htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <label className={style.label} htmlFor="password">Пароль</label>
        <input type="password" name="password" id="password" />
        {auth
          ? (
            <>
              <label className={style.label} htmlFor="repeatPassword">Повторите пароль</label>
              <input type="password" name="repeatPassword" id="repeatPassword" />
              <button className={style.authButton} type="submit">Зарегистрироваться</button>
            </>
          )
          : <button className={style.authButton} type="submit">Войти</button>}
      </form>
    </div>
  );
}
