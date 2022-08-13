import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router';

import ACTIONS from '../../socket/actions';
import socket from '../../socket';

export default function Loby() {
  const [sRooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] }) => {
      setRooms(rooms);
    });
  }, []);

  return (

    <div>
      <div>Loby</div>
      <button type="button" onClick={() => { navigate(`/room/${v4()}`); }}>CreateNewRoom</button>
      <ul>
        {sRooms.map((roomID) => (
          <li key={roomID}>

            {roomID}
            <button type="button" onClick={() => { navigate(`/room/${roomID}`); }}>JoinRoom</button>

          </li>
        ))}
      </ul>
    </div>
  );
}
