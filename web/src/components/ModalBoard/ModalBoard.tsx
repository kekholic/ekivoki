/* eslint-disable max-len */
/* eslint-disable no-empty-pattern */
import React, { useState } from 'react';
import board from '../../img/V3.png';
import style from './ModalBoard.module.css';
import ava1 from '../../img/chip10-d4136a1019ee0e95.png';
import ava2 from '../../img/chip7-e82ee8f9e57c466e.png';
import ava3 from '../../img/chip8-9d9e969a7a91713e.png';

type Props = {
  boardVisible: boolean;
};

const obj = {
  1: { y: '195px', x: '130px' },
  2: { y: '262px', x: '130px' },
  3: { y: '327px', x: '161px' },
  4: { y: '310px', x: '246px' },
  5: { y: '249px', x: '318px' },
  6: { y: '218px', х: '392px' },
  7: { y: '218px', x: '478px' },
  8: { y: '223px', x: '554px' },
  9: { y: '231px', x: '620px' },
  10: { y: '306px', x: '622px' },
  11: { y: '374px', x: '594px' },
  12: { y: '366px', x: '520px' },
  13: { y: '351px', x: '447px' },
  14: { y: '348px', x: '371px' },
  15: { y: '415px', x: '335px' },
  16: { y: '482px', x: '349px' },
  17: { y: '482px', x: '434px' },
  18: { y: '483px', x: '530px' },
  19: { y: '487px', x: '616px' },
  20: { y: '557px', x: '630px' },
  21: { y: '617px', х: '630px' },
  22: { y: '688px', x: '621px' },
  23: { y: '695px', x: '533px' },
  24: { y: '695px', x: '438px' },
  25: { y: '637px', x: '435px' },
  26: { y: '573px', x: '432px' },
  27: { y: '576px', x: '358px' },
  28: { y: '570px', x: '270px' },
  29: { y: '492px', x: '245px' },
  30: { y: '416px', x: '216px' },
  31: { y: '438px', x: '123px' },
  32: { y: '529px', x: '101px' },
  33: { y: '611px', x: '101px' },
  34: { y: '678px', x: '101px' },
  35: { y: '749px', x: '101px' },
  36: { y: '817px', x: '101px' },
  37: { y: '809px', x: '158px' },
  38: { y: '754px', x: '206px' },
  39: { y: '688px', x: '246px' },
  40: { y: '665px', x: '314px' },
  41: { y: '726px', x: '314px' },
  42: { y: '799px', x: '314px' },
  43: { y: '809px', x: '387px' },
  44: { y: '809px', x: '459px' },
};

/*   30, 438, 123,
  31, 529, 101,
  32, 611, 101,
  33, 678, 101,
  34, 749, 101,
  35, 817, 101,
  36, 809, 158,
  37, 754, 206,
  38, 688, 246,
  39, 665, 314,
  40, 726, 314,
  41, 799, 314,
  42, 809, 387,
  43, 809, 459,
]; */
function ModalBoard({ boardVisible }: Props) {
  const [sRooms, setSrooms] = useState(true);
  function range(start: number, end: number): Array<number> {
    return Array(end - start + 1)
      .fill(0)
      .map((_, idx) => start + idx);
  }
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
        <img className={style.board} src={board} alt="board" />
        <img className={style.ava} src={ava1} alt="ava" />
        <img className={style.ava} src={ava2} alt="ava" />
        <img className={style.ava} src={ava3} alt="ava" />
        {range(1, 44).map((el) => (
          <div
            id={String(el)}
            key={el}
            className={style.cell}
            style={{ top: obj[el].y, left: obj[(el)].x }}
          />
        ))}
        <div id="1" />
      </div>
    </div>
  );
}

export default ModalBoard;
