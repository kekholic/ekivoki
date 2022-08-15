/* eslint-disable no-empty-pattern */
import React, { useState } from 'react';
import board from '../../img/V3.png';
import style from './ModalBoard.module.css';
import ava from '../../img/chip10-d4136a1019ee0e95.png'

type Props = {
  boardVisible: boolean;
};

function ModalBoard({ boardVisible }: Props) {
const [sRooms,setSrooms]= useState(true);

  return (
    <div
      className={
        sRooms ? `${style.modal} ${style.modalActive}` : `${style.modal}`
      }
    >
      <div
        className={
          sRooms
            ? `${style.modalContent} ${style.modalContentActive}`
            : `${style.modalContent}`
        }
      >
        <p>КАРТА!!</p>
        <img src={board} alt='board' />
        <img src={ava} alt='ava' />
      </div>
    </div>
  );
}

export default ModalBoard;
