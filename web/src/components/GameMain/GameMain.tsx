import React, { useEffect, useState } from 'react';
import {
  // StaticRouter,
  useParams,
} from 'react-router-dom';
import io from 'socket.io-client';
// import { createModuleResolutionCache } from 'typescript';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  incrementCountPlayers,
  // startGame,
} from '../../store/reducers/actionCreators';
import CameraContainer from '../CameraContainer/CameraContainer';
import QuestionCard from '../QuestionCard/QuestionCard';
import VideoComponent from '../WebChat/VideoComponent';

type Props = {};

const options = {
  'force new connection': true,
  reconnecctionAttempts: 'infinity',
  timeout: 10000,
  transport: ['websocket', 'polling'],
};

const socket = io(`${process.env.REACT_APP_API_URL}`, options);

// TODO:
// отрисовка шаблона: камеры, место для карточки с вопросом, место для боарда.
// на сокетах реализовать обновление геймстейта: как только новый игрок присоединяется к игре,
// с бэка прилетает инфа о том, что новый пользователь присоединился и записывается в редакс
// как только набирается нужное количество человек, делаем уведомление о начале игры
// и делаем кнопку броска кубика активной. Как только игра началась - игра меняет статус на бэке
// ее больше не найти в списке игр.
/* socket.emit('send_message', {
  id,
  method: 'chat',
  user,
  game,
}); */

export default function GameMain({ }: Props) {
  const [start, setStart] = useState(false);
  const { user } = useAppSelector((store) => store.user);
  const { game } = useAppSelector((store) => store);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.emit('gameConnection', {
      roomID: id,
      user,
      method: 'firstInit',
    });
    // console.log('zahel');

    socket.on('gameConnectionAnswer', (msg) => {
      if (game.playersPriority.indexOf(user.id) === 0) {
        dispatch(incrementCountPlayers({ userId: msg.user.id, username: msg.user.username }));
        if (!game.isLoading) {
          socket.emit('newStateGame', {
            roomID: id,
            game,
            user,
            method: 'choiseGameState',
          });
        }
      }
    });
    // console.log('pfkegf');
    // socket.emit('join_room', {
    //   id,
    //   method: 'connection',
    //   user,
    // });
    // socket.on('resive_message', (data) => {
    //   if (data.method === 'connection') {
    //     dispatch(incrementCountPlayers({
    //       gameId: id,
    //       userId: data.user.id,
    //       userName: data.user.username,
    //     }));
    //   }
    //   // const msg = JSON.parse(data);
    //   console.log('msg: ', data);
    // });
    // const socket = new WebSocket(`ws://localhost:4000/game/${id}`);
    // socket.onopen = () => {
    //   console.log('Подключение установлено');
    //   socket.send(
    //     JSON.stringify({
    //       id,
    //       method: 'connection',
    //       user,
    //     })
    //   );
    // };
    // socket.onmessage = (event) => {
    //   const msg = JSON.parse(event.data);
    //   switch (msg.method) {
    //     case 'connection':
    //       console.log(`пользователь ${msg.user.username} присоединился`);
    //       dispatch(incrementCountPlayers({ gameId: id, user }));
    //       if (game.countPlayers === game.maxPlayers) {
    //         setStart(true);
    //       }
    //       break;

    //     case 'draw':
    //       console.log('ebnytsia');
    //       break;
    //     default:
    //       break;
    //   }
    // };
  }, [socket]);
  useEffect(() => {
    // console.log('countPlayers', game.countPlayers);
  }, [game]);

  useEffect(() => {
    // dispatch(startGame({ gameId: id, isPanding: false }));
  }, [start]);

  // рукопожатие сокет
  // побмен юзером
  // добавление в гейм стейт
  // удаление при выходе
  const howManyPlayers = 6; // TODO с бэка
  return (
    <>
      {id && <VideoComponent roomID={id} />}

      {/* <CameraContainer /> */}
      <div className="placeQuestion">
        <button type="submit">Назвать слово!</button>
        <QuestionCard />
      </div>
    </>
  );
}
