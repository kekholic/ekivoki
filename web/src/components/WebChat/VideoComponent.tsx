import React, { ReactElement } from 'react';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';
import { IvcProps } from '../../types/webRTC';
import style from './VideoComponent.module.css';

export default function VideoComponent(props: IvcProps) : ReactElement {
  const { roomID } = props;
  const { clients, provideMediaRef } = useWebRTC(roomID);

  return (
    clients?.map((clientID: string) => (
      <video
        className={style.video}
        key={clientID}
        ref={(instance: HTMLVideoElement) => { provideMediaRef(clientID, instance); }}
        playsInline
        autoPlay
        muted={clientID === LOCAL_VIDEO}
      >
        <track kind="captions" />
      </video>
    ))
  );
}
