import React from 'react';

type Props = {}

export default function NewGameSettings({ }: Props) {
  const createGameHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      players: { value: string };
      password: { value: string };
    };

    const players = target.players.value;
    const password = target.password.value;

    console.log(players);
    console.log(password);
    // TODO:
    // отправка в редакс стейт нужных полей
    // отрпавка в базу данных нужной инфы с инпутов
    // Сделать максимум 6 человек в настройках формы
  };
  return (
    <form onSubmit={createGameHandler}>
      <label htmlFor="players">
        Количество игроков:
        <input type="text" name="players" />
      </label>
      <br />
      <label htmlFor="password">
        Пароль:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Создать игру!</button>

    </form>

  );
}
