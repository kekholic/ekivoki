import React from 'react';
import { JsxElement } from 'typescript';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';

type Props = {
  roomID: string;
}

export default function VideoComponent(props: Props) {
  const { clients, provideMediaRef } = useWebRTC(props.roomID);

  return (
    <div>
      {clients?.map((clientID: string) => (
        <div key={clientID}>
          <video
            ref={(instance) => {
              provideMediaRef(clientID, instance);
            }}
            autoPlay
            playsInline
            muted={clientID === LOCAL_VIDEO}
          />
        </div>
      ))}

    </div>
  );
}
