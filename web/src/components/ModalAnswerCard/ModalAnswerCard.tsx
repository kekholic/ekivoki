/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React, { Dispatch, ReactElement, useEffect } from 'react';
import style from './ModalAnswerCard.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { modalCloseNo } from '../../lib/game/gameUpdate';
import { correctAnswer } from '../../store/reducers/gameSlice';

// interface IvariableUser {
//   modalVisibly: boolean;
//   currentUserIdForAnswer: Number | null;
//   currentUsernameForAnswer: String;
// }
// interface IProps {
//   variableUser?: IvariableUser;
//   setVariableUser?: any;
// }

interface IProps {
  modal: IModal;
  setModal: Dispatch<IModal>;
  findIndex: Function;
}
interface IModal {
  visible: boolean;
  username: string;
  userId: number;
}

export default function ModalAnswerCard(props: IProps): ReactElement {
  const { setModal, modal, findIndex } = props;
  const dispatch = useAppDispatch();
  // const { variableUser, setVariableUser } = props;
  // const { user } = useAppSelector((store) => store.user);
  // const game = useAppSelector((store) => store.game);

  // const trueAnswer = () => {
  //   console.log('answerf');
  // };
  // const falseAnswer = () => {
  //   setVariableUser({
  //     modalVisibly: false,
  //     currentUserIdForAnswer: null,
  //     currentUsernameForAnswer: '',
  //   });
  //   wrongAnswer(String(game.game.id));
  // };
  const { game } = useAppSelector((store) => store);
  const user = useAppSelector((store) => store.user);

  const noHandler = () => {
    setModal({
      visible: false,
      username: '',
      userId: 0,
    });
    modalCloseNo(String(game.game.id));
  };
  const yesHandler = () => {
    // если кубик изменит отфильтровать ти и  найти следующий вопрос с таким типом
    let current = 0;
    for (let i = 0; i < game.questions.list.length; i++) {
      if (game.questions.list[i].id === game.questions.current) {
        current = game.questions.list[i + 1]?.id || game.questions.list[0].id;
      }
    }

    let isHost = 0;

    for (let i = 0; i < game.playersPriority.length; i++) {
      if (game.playersPriority[i].userId === game.isHost) {
        isHost =
          game.playersPriority[i + 1]?.userId ||
          game.playersPriority[0]?.userId;
      }
    }
    const progress = {
      userId: modal.userId,
      score: game.progress[modal.userId] ? game.progress[modal.userId] : 0,
    };
    progress.score += game.questions.list[findIndex()].type;

    const progressHost = {
      userId: user.user.id,
      score: game.progress[user.user.id] ? game.progress[user.user.id] : 0,
    };
    progressHost.score += game.questions.list[findIndex()].type;

    dispatch(correctAnswer({ progress, progressHost, isHost, current }));

    setModal({
      visible: false,
      username: '',
      userId: 0,
    });
    modalCloseNo(String(game.game.id));
  };

  useEffect(() => {
    console.log('rerender!!!');
  }, [modal.visible]);
  // function submitHandler(event) {
  //   setActive(false);

  //   // useEffect(() => {
  //   //   const timerId = setInterval(() => {
  //   //     setCounter((seconds) => {
  //   //       if (seconds > 0) return seconds - 1;
  //   //       clearInterval(timerId);
  //   //       return 0;
  //   //     });
  //   //   }, 1000);
  //   // }, []);
  //   const innerHandler = () => {
  //     // setCounter(60);
  //     setActive(false);
  //   };
  return (
    <>
      {/* {game.isHost === user.id ? (
        <div>
          <p>
            {variableUser?.currentUsernameForAnswer}
            {' '}
            ответил правильно?
          </p>
          <button onClick={trueAnswer} type="submit">
            Да
          </button>
          <button onClick={falseAnswer} type="submit">
            Нет
          </button>
        </div>
      ) : (
        <div>
          <p>
            На вопрос отвечает
            {variableUser?.currentUsernameForAnswer}
          </p>
        </div>
      )}
      <p>.</p> */}

      <div
        className={
          modal.visible
            ? `${style.modal} ${style.modalActive}`
            : `${style.modal}`
        }
      >
        <div
          className={
            modal.visible
              ? `${style.modalContent} ${style.modalContentActive}`
              : `${style.modalContent}`
          }
          onClick={(e) => e.stopPropagation()}
        >
          {' '}
          {/* {counter || innerHandler()} */}
          {/* {children} */}
          <div>
            {user.canSendMessage ? (
              <>
                <p> {modal.username} верно ответил на вопрос?</p>
                <button type='submit' onClick={yesHandler}>
                  Да
                </button>
                <button type='submit' onClick={noHandler}>
                  Нет
                </button>
              </>
            ) : (
              <div>
                На вопрос отвечает
                {modal.username}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
