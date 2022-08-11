import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionCard from '../QuestionCard/QuestionCard';

type Props = {}

// TODO:
// отрисовка шаблона: камеры, место для карточки с вопросом, место для боарда.
// на сокетах реализовать обновление геймстейта: как только новый игрок присоединяется к игре,
// с бэка прилетает инфа о том, что новый пользователь присоединился и записывается в редакс
// как только набирается нужное количество человек, делаем уведомление о начале игры
// и делаем кнопку броска кубика активной. Как только игра началась - игра меняет статус на бэке
// ее больше не найти в списке игр.

export default function GameMain({ }: Props) {
  const { id } = useParams();
  console.log('params', id);

  const howManyPlayers = 6; // TODO с бэка
  return (
    <>
      <div className="cameras">
        <div>player1</div>
        <div>player2</div>
        <div>player3</div>
        <div>player4</div>
        <div>player5</div>
        <div>player6</div>
      </div>
      <div className="placeQuestion">
        <button type="submit">Назвать слово!</button>
        <QuestionCard />
      </div>
    </>
  );
}
