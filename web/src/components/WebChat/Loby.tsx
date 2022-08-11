import React, { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router';
import socket from '../../socket';
import ACTIONS from '../../socket/actions';

type Props = {}
type Paiload = {
  token: string,
  user: any
}

interface Test {
  action: string,
  payload: Paiload
}

const mocRooms = {
  id: '1',
  title: 'NewGame',
};

export default function Loby({ }: Props) {
  // const history = useHistory();
  const [sRooms, setRooms] = useState([]);
  const history = createBrowserHistory();
  const navigate = useNavigate();

  const rootNode = useRef();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] }) => {
      // if (rootNode.current) {
        setRooms(rooms);
      // }
    });
  }, []);

 

  return (
  // <>

  //   <div>Loby</div>
  //   <button type="button" onClick={() => { navigate(`/room/${v4()}`) }}>CreateNewRoom</button>
  //   <ul>
  //     {sRooms.map((roomID) => (
  //       <li key={roomID}>

  //         {roomID}
  //         <button type="button" onClick={() => {navigate(`/room/${roomID}`);}}>JoinRoom</button>

    //       </li>
    //     ))}
    //   </ul>
    // </>
    // <>
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
