import React from 'react';
import { useAppSelector } from '../../../hooks/redux';

interface Props {
  findIndex: Function,
}

export default function CardForHost({ findIndex }: Props) {
  const { game } = useAppSelector((store) => store);
  return (

    <p>{game.questions.list[findIndex()].questionForHost}</p>

  );
}
