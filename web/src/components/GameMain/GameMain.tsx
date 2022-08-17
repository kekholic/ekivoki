/* eslint-disable operator-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, {
  useEffect,
  useState,
  //  useState
} from 'react';
import { useParams } from 'react-router-dom';
import GAME_STATUS from '../../actions/gameStatus';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import checkStatusGame from '../../hooks/useCheckStatusGame';
import {
  BoardVisibleMessage,
  modalAnswer,
  // sendMessageGameState,
  sendNewGameState,
  // tryAnswer,
  // updateQuestionState,
  // updateVisibleState,
} from '../../lib/game/gameUpdate';
import socket from '../../socket';
import { updateCanSendStatus } from '../../store/reducers/authSlice';
// import { getCard } from '../../store/reducers/actionCreators';
import {
  hostLeaveUpdate,
  playerJoinedUpdateState,
  playersLeaveUpdate,
  setVideoComponents,
  updateGameState,
} from '../../store/reducers/gameSlice';
import Canvas from '../Canvas/Canvas';
import ModalAnswerCard from '../ModalAnswerCard/ModalAnswerCard';
import ModalBoard from '../ModalBoard/ModalBoard';
// import { updateGameState } from '../../store/reducers/gameSlice';
// import { newQuestionState } from '../../store/reducers/questionSlice';
// import ModalAnswerCard from '../ModalAnswerCard/ModalAnswerCard';
// import QuestionCard from '../QuestionCard/QuestionCard';
import VideoComponent from '../WebChat/VideoComponent';
import style from './GameMain.module.css';

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

const users = {};

export default function GameMain() {
  const [modal, setModal] = useState({
    visible: false,
    username: '',
    userId: 0,
  });
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.canSendMessage) {
      dispatch(setVideoComponents({ [socket.id]: user.user.id }));
    }
  }, []);
  const [boardVisible, setBoardVisible] = useState(false);
  const { game } = useAppSelector((store) => store);
  // const question = useAppSelector((store) => store.question);
  const { id } = useParams();
  const statusGame = checkStatusGame(Number(id));

  const findIndex = (): number => {
    let ind = 0;
    for (let i = 0; i < game.questions.list.length; i++) {
      if (game.questions.list[i].id === game.questions.current) {
        ind = i;
        break;
      }
    }
    return ind;
  };

  console.log(socket.id);

  useEffect(() => {
    console.log(statusGame);
  }, [statusGame]);

  if (
    statusGame !== GAME_STATUS.END &&
    statusGame !== GAME_STATUS.IN_PROGRESS
  ) {
    useEffect(() => {
      // sendMessageGameState(game, id, user);

      socket.on('playerJoined', (player) => {
        // users = { ...users, player };
        console.log('socket.id', player);
        if (user.canSendMessage) {
          dispatch(playerJoinedUpdateState(player));
        }
      });

      socket.on('sendNewGameStateBack', (msg) => {
        // console.log('what a fuck?');
        dispatch(updateGameState(msg.game));
      });

      socket.on('modalAnswerOpen', (msg) => {
        setModal({
          visible: true,
          username: msg.username,
          userId: msg.userId,
        });
      });

      socket.on('modalCloseFromBack', (msg) => {
        setModal({
          visible: false,
          username: '',
          userId: 0,
        });
      });
      socket.on('OpenBoard', (msg) => {
        setBoardVisible(true);
      });

      // socket.on('exit_game_host', (msg) => {
      //   if (user.user.id === msg.isHost) {
      //     dispatch(hostLeaveUpdate(msg));
      //   }
      // });
      // socket.on('exit_game', (msg) => {
      //   if (user.canSendMessage) {
      //     dispatch(playersLeaveUpdate(msg));
      //   }
      // });
    }, [socket]);

    useEffect(() => {
      if (user.canSendMessage) {
        sendNewGameState(game, String(game.game.id));
        if (user.user.id !== game.isHost) {
          if (game.game.status === GAME_STATUS.IN_PROGRESS && Object.keys(game.progress).length) {
            BoardVisibleMessage(id);
            setBoardVisible(true);
          }
          dispatch(updateCanSendStatus(false));
        }
      }
      if (user.user.id === game.isHost) {
        dispatch(updateCanSendStatus(true));
      }
      // i += 1;
      // console.log(i);
    }, [game]);

    // useEffect(() => {
    //   console.log(i);

    //   return () => {
    //     if (user.canSendMessage) {
    //       let isHost = 0;

    //       for (let i = 0; i < game.playersPriority.length; i++) {
    //         if (game.playersPriority[i].userId === game.isHost) {
    //           isHost =
    //             game.playersPriority[i + 1]?.userId ||
    //             game.playersPriority[0]?.userId;
    //         }
    //       }

    //       socket.emit('exit_game_host', {
    //         isHost,
    //         game,
    //         roomId: id,
    //         userId: user.user.id,
    //       });
    //     } else {
    //       socket.emit('exit_game', { roomId: id, userId: user.user.id });
    //     }
    //   };
    // }, [game]);

    const giveAnswer = () => {
      modalAnswer(String(game.game.id), user.user.username, user.user.id);
      setModal({
        visible: true,
        username: user.user.username || 'username',
        userId: user.user.id,
      });
    };

    useEffect(() => {
      if (boardVisible) {
        setTimeout(() => {
          setBoardVisible(false);
        }, 5000);
      }
    }, [boardVisible]);

    return (
      <div className={style.gameContainer}>
        <div className={style.gameVideos}>
          {id && <VideoComponent roomID={id} />}
        </div>
        <div className={style.gameSpace}>
          {modal.visible && (
          <ModalAnswerCard
            setModal={setModal}
            modal={modal}
            findIndex={findIndex}
          />
          )}
          {(game.game.status === GAME_STATUS.IN_PROGRESS) &&
          (user.canSendMessage ? (
            <p>{game.questions.list[findIndex()].questionForHost}</p>
          ) : (
            <>
              <p>{game.questions.list[findIndex()].questionForPlayers}</p>
              <button type="submit" onClick={giveAnswer}>
                Дать ответ
              </button>
            </>
          ))}
          {game.questions.list[findIndex()].type === 3 && (
          <Canvas roomID={id} canSendMessage={user.canSendMessage} />
          )}
          {boardVisible && <ModalBoard boardVisible={boardVisible} />}
          {/* <ModalBoard boardVisible={boardVisible} /> */}
        </div>
      </div>
    );
  }

  if (statusGame === GAME_STATUS.END) {
    return (
      <>
        <h1>Эта игра закончена</h1>
        <div>перейдите в список игр</div>
      </>
    );
  }

  if (statusGame === GAME_STATUS.IN_PROGRESS) {
    return (
      <>
        <h1>Эта игра уже стартовала</h1>
        <div>перейдите в список игр</div>
      </>
    );
  }
}
