import React, { useEffect, useState } from 'react';

type Props = {}

export default function CameraContainer({ }: Props) {
  // TODO:
  // из стейта получаем ведущего
  // камеру отрисовываем только при подключении пользователя
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    // здесь поднимаем сокет конекшен с айди игры из стейта
    // добавляем в массив пользователей новых подключившихся игроков
    // сортируем по айди.

    const allUsers: { id: number, name: string }[] = [{ id: 24, name: 'vasya' },
    { id: 1, name: 'petya' },
    { id: 28, name: 'clown' },
    { id: 6, name: 'dolbaeb' },
    { id: 100, name: 'huesos' }];

    allUsers.sort((current, next) => {
      if (current.id > next.id) return 1;
      return -1;
    });
    setUsers(allUsers);
    return () => {

    };
  }, []);

  useEffect(() => { }, [users]);

  return (
    <div className="cameras">
      {/* {users.map((user) => {
        <div>{user.name}</div>;
      })} */}
    </div>
  );
}
