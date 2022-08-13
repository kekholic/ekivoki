import React, { useEffect, useState } from 'react';
import {
  // StaticRouter,
  useParams,
} from 'react-router-dom';
// import io from 'socket.io-client';
// import { createModuleResolutionCache } from 'typescript';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { sendMessageGameState } from '../../lib/game/gameUpdate';
import socket from '../../socket';
import {
  startGame,
  // startGame,
} from '../../store/reducers/actionCreators';
import { updateGameState } from '../../store/reducers/gameSlice';
import QuestionCard from '../QuestionCard/QuestionCard';
import VideoComponent from '../WebChat/VideoComponent';

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

export default function GameMain() {
  const [start, setStart] = useState(false);
  const [questionCard, setQuestionCard] = useState(false);
  const { user } = useAppSelector((store) => store.user);
  const { game } = useAppSelector((store) => store);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    sendMessageGameState(game, id, user);
    // socket.emit('game', {
    //   game,
    //   roomID: id,
    //   user,
    //   method: 'initState',
    // });
    socket.on('gameAnswers', (msg) => {
      switch (msg.method) {
        case 'initState':
          dispatch(updateGameState(msg.game));
          break;
        default:
          break;
      }
    });
    // console.log('zahel');
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
    if (game.game.countPlayers === game.game.maxPlayers) {
      setStart(true);
      // dispatchEvent(getQuestion());
      if (user.id === game.isHost) {
        sendMessageGameState(game, id, user);
      }
    }
  }, [game]);

  const hendlerStart = () => {
    dispatch(startGame({ id: game.game.id, isPanding: false }));
    setStart(false);
    setQuestionCard(true);
  };

  // рукопожатие сокет
  // побмен юзером
  // добавление в гейм стейт
  // удаление при выходе
  // const howManyPlayers = 6; // TODO с бэка
  return (
    <>
      {id && <VideoComponent roomID={id} />}

      {/* <CameraContainer /> */}
      {questionCard && (
        <div className="placeQuestion">
          <button type="submit">Назвать слово!</button>
          <QuestionCard />
        </div>
      )}
      {game.game.isPanding && start
        && ((start && user.id === game.isHost) ? (
          <button onClick={hendlerStart} type="submit">
            Начать игру
          </button>
        ) : (
          <p>ХОСТ не начал игру</p>
        ))}
      {!start && game.game.isPanding && <p>Ждем Игроков ...</p>}
    </>
  );
}
