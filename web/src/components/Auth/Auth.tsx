import React, { ReactElement, useState } from 'react';
import $api from '../../http';

type Props = {}

export default function Auth({ }: Props): ReactElement {
  const [input, setInput] = useState({});

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(e);
    setInput(e);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="mail">
        Mail:
        <input type="text" name="mail" />

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
