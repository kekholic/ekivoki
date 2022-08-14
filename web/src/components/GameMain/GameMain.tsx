import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  // sendMessageGameState,
  sendNewGameState,
  // tryAnswer,
  // updateQuestionState,
  // updateVisibleState,
} from '../../lib/game/gameUpdate';
import socket from '../../socket';
import { updateCanSendStatus } from '../../store/reducers/authSlice';
// import { getCard } from '../../store/reducers/actionCreators';
import { playerJoinedUpdateState, updateGameState } from '../../store/reducers/gameSlice';
// import { updateGameState } from '../../store/reducers/gameSlice';
// import { newQuestionState } from '../../store/reducers/questionSlice';
import ModalAnswerCard from '../ModalAnswerCard/ModalAnswerCard';
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
  // const [visible, setVisible] = useState({
  //   start: false,
  //   waiting: true,
  //   questionCard: false,
  //   visibleHostButton: false,
  //   dontHost: false,
  //   count: true,
  // });

  const [variableUser, setVariableUser] = useState({
    modalVisibly: false,
    currentUserIdForAnswer: null,
    currentUsernameForAnswer: '',
  });
  const user = useAppSelector((store) => store.user);
  const { game } = useAppSelector((store) => store);
  const question = useAppSelector((store) => store.question);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const oldIsHost = game.isHost;

  useEffect(() => {
    // sendMessageGameState(game, id, user);

    socket.on('playerJoined', (player) => {
      if (user.canSendMessage) {
        dispatch(playerJoinedUpdateState(player));
      }
    });

    socket.on('sendNewGameStateBack', (msg) => {
      dispatch(updateGameState(msg.game));
    });
    // socket.on('gameAnswers', (msg) => {
    //   switch (msg.method) {
    //     case 'initState':
    //       dispatch(updateGameState(msg.game));
    //       break;
    // case 'visibleState':
    //   console.log('msg.visible:', msg.visible);
    //   setVisible({ ...msg.visible });
    //   break;
    // case 'questionState':
    //   dispatch(newQuestionState(msg.question));
    //   break;
    // case 'tryAnswer':
    //   setVariableUser((prev) => ({
    //     ...prev,
    //     modalVisibly: true,
    //     currentUserIdForAnswer: msg.user.id,
    //     currentUsernameForAnswer: msg.user.username,
    //   }));
    //   break;
    // case 'wrongAnswer':
    //   setVariableUser({
    //     modalVisibly: false,
    //     currentUserIdForAnswer: null,
    //     currentUsernameForAnswer: '',
    //   });
    //   break;
    //     default:
    //       break;
    //   }
    // });
  }, [socket]);

  useEffect(() => {
    if (user.canSendMessage) {
      sendNewGameState(game, String(game.game.id));
      if (user.user.id !== game.isHost) {
        dispatch(updateCanSendStatus(false));
      }
    }
    if (user.user.id === game.isHost) {
      dispatch(updateCanSendStatus(true));
    }
  }, [game]);

  // useEffect(() => {
  //   if (visible.start && visible.count) {
  //     if (user.id === game.isHost) {
  //       console.log('setVisibleHostButton: ');
  //       setVisible((prev) => ({
  //         ...prev,
  //         visibleHostButton: true,
  //         count: false,
  //       }));
  //     } else {
  //       setVisible((prev) => ({ ...prev, dontHost: true }));
  //     }
  //   }
  // }, [visible.start]);

  // useEffect(() => {
  //   if (game.game.countPlayers === game.game.maxPlayers) {
  //     console.log('Зашли епта');
  //     setVisible((prev) => ({
  //       ...prev,
  //       waiting: false,
  //       start: true,
  //     }));
  //     console.log(visible);
  //     if (user.id === game.isHost) {
  //       sendMessageGameState(game, id, user);
  //       dispatch(getCard({ id: question.id }));
  //     }
  //   }
  // }, [game]);

  // useEffect(() => {
  //   if (user.id === game.isHost) {
  //     updateQuestionState(question, id);
  //   }
  // }, [question]);

  // const submitHandlerAnswer = () => {
  //   tryAnswer(user, id);
  // };

  // const hendlerStart = () => {
  //   dispatch(startGame({ id: game.game.id, isPanding: false }));

  //   setVisible((prev) => ({
  //     ...prev,
  //     start: false,
  //     questionCard: true,
  //     dontHost: false,
  //     visibleHostButton: false,
  //   }));
  //   console.log(visible);
  //   updateVisibleState(visible, id);
  // };

  // useEffect(() => {
  //   updateVisibleState(visible, id);
  // }, [visible.questionCard]);

  return (
    <>
      {id && <VideoComponent roomID={id} />}

      {/* {visible.questionCard && ( */}
      <div className="placeQuestion">
        {user.user.id === game.isHost ? (
          <p>{question.questionForHost}</p>
        ) : (
          <>
            <p>{question.questionForPlayers}</p>
            <button type="submit">
              Назвать слово!
            </button>
          </>
        )}

        <QuestionCard />
        {variableUser.modalVisibly && (
          <ModalAnswerCard
            variableUser={variableUser}
            setVariableUser={setVariableUser}
          />
        )}
      </div>
      {/* )} */}
      {/*       {visible.visibleHostButton && (
        <button onClick={hendlerStart} type='submit'>
          Начать игру
        </button>
      )}
      {visible.dontHost && <p>ХОСТ не начал игру</p>}
      {visible.waiting && <p>Ждем Игроков ...</p>} */}
    </>
  );
}
