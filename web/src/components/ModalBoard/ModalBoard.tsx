/* eslint-disable no-empty-pattern */
import React from 'react';
import board from '../../img/V3.png';

type Props = {};

function ModalBoard({}: Props) {
  return (
    <div>
      <p>ModalBoard</p>
      <img src={board} alt="board" />
    </div>
  );
}

export default ModalBoard;
