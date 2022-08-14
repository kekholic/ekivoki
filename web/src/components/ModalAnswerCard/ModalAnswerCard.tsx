/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { wrongAnswer } from '../../lib/game/gameUpdate';

interface IvariableUser {
  modalVisibly: boolean;
  currentUserIdForAnswer: Number | null;
  currentUsernameForAnswer: String;
}
interface IProps {
  variableUser?: IvariableUser;
  setVariableUser?: any;
}

export default function ModalAnswerCard(props: IProps): ReactElement {
  const { variableUser, setVariableUser } = props;
  const { user } = useAppSelector((store) => store.user);
  const game = useAppSelector((store) => store.game);

  const trueAnswer = () => {
    console.log('answerf');
  };
  const falseAnswer = () => {
    setVariableUser({
      modalVisibly: false,
      currentUserIdForAnswer: null,
      currentUsernameForAnswer: '',
    });
    wrongAnswer(String(game.game.id));
  };
  return (
    <>
      {game.isHost === user.id ? (
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
      <p>.</p>
    </>
  );
}
