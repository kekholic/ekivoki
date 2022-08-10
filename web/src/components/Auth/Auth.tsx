import React, { ReactElement, useEffect, useState } from 'react';
import $api from '../../http';

type Props = {}

export default function Auth({ }: Props): ReactElement {
  const [input, setInput] = useState({ email: '', password: '', username: '' });

  const submitHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value || undefined;
    const password = e.target.password.value;
    setInput({ email, password, username });
  };
  useEffect(() => {
    if (input.email) {
      $api
        .post(`/auth/${input.username ? 'registration' : 'login'}`, input)
        .then((data) => {
          console.log(data);
          // dispatch(authAndLoginUser(data));
          // dispatch(setIsAuth());
          // dispatch(setIsLoading(false));
          // navigate('/home', { replace: true });
        })
        .catch((error) => {
          console.log(error);
          // dispatch(
          //   getError({
          //     status: error.response.status,
          //     error: error.response.data.message,
          //   }),
          // );
          // dispatch(setIsLoading(false));
          // navigate('/error', { replace: true });
        });
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
      <button type="submit">Submit</button>
    </form>
  );
}
