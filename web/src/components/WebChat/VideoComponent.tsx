import React, { ReactElement } from 'react';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';
import { IvcProps } from '../../types/webRTC';

export default function VideoComponent(props: IvcProps) : ReactElement {
  const { roomID } = props;
  const { clients, provideMediaRef } = useWebRTC(roomID);

  return (
    <div>
      {clients?.map((clientID: string) => (
        <div key={clientID}>
          <video
            ref={(instance: HTMLVideoElement) => { provideMediaRef(clientID, instance); }}
            playsInline
            autoPlay
            muted={clientID === LOCAL_VIDEO}
          >
            <track kind="captions" />
          </video>
        </div>
      ))}

    </div>
  );
}
