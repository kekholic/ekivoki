import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';

type Props = {}
interface IUser {
  id: number,
  name: string
}

export default function CameraContainer({ }: Props) {
  const [users, setUsers] = useState([{}]);

  // здесь поднимаем сокет конекшен с айди игры из стейта
  // добавляем в редакс в стор в массив playersPriority игроков
  // сортируем по айди.

  // ГОТОВЫЙ КОД КОГДА БУДЕТ СТЕЙТ НЕ УДАЛЯТЬ!
  // const usersConnected = useAppSelector((store) => store.game.playersPriority);
  // if (usersConnected.length) {
  //   usersConnected.sort((current, next) => {
  //     if (current.id > next.id) return 1;
  //     return -1;
  //   });
  // }

  useEffect(() => {
    // сверху usersConnected это мои allUsers, заменить когда будут
    const allUsers: IUser[] = [{ id: 24, name: 'vasya' },
    { id: 1, name: 'petya' },
    { id: 28, name: 'clown' },
    { id: 6, name: 'dolbaeb' },
    { id: 100, name: 'huesos' },
    ];

    allUsers.sort((current, next) => {
      if (current.id > next.id) return 1;
      return -1;
    });
    setUsers(allUsers);
    return () => {

    };
  }, []);

  return (
    <div className="cameras">
      {users.length && users.map((user: any) => (
        <div>
          {user.name}
        </div>
      ))}
    </div>
  );
}
