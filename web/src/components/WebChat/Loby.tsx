import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import socket from '../../socket';
import ACTIONS from '../../socket/actions';

type Props = {}

const mocRooms = []

export default function Loby({ }: Props) {
  // const history = useHistory();
  const [sRooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] }) => {
      setRooms(rooms);
    });
  }, []);

  return (
    <>

      <div>Loby</div>
      <button onClick={() => {}}>CreateNewRoom</button>
      <ul>
        {sRooms.map((roomID) => (
          <li key={roomID}>

            {roomID}
            <button onClick={() => {}}>JoinRoom</button>

          </li>
        ))}
      </ul>
    </>
  );
}
