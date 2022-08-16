/* eslint-disable max-len */
import React, { ReactElement, useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';
import { IvcProps } from '../../types/webRTC';
import style from './VideoComponent.module.css';

export default function VideoComponent(props: IvcProps): ReactElement {
  const { roomID } = props;
  const { clients, provideMediaRef } = useWebRTC(roomID);
  const { game } = useAppSelector((store) => store);
  const user = useAppSelector((store) => store.user);
  // (game.videoComponents[clientID] == game.isHost) ? bigWindow : smallWindow
  useEffect(() => {
    // console.log('clients', clients);
  }, []);

  return (
    clients?.map((clientID: string) => {
      console.log('clients', clients);
      console.log('clientID', clientID, user.user.id);
      return (
        (game.videoComponents[clientID] === game.isHost)
          ? (
            <div>
              <video
                className={(game.videoComponents[clientID] === game.isHost) ? style.videoHost : style.videoPlayer}
                key={clientID}
                ref={(instance: HTMLVideoElement) => { provideMediaRef(clientID, instance); }}
                playsInline
                autoPlay
                muted={clientID === LOCAL_VIDEO}
              >
                <track kind="captions" />
              </video>
              <span>Ведущий</span>
            </div>
          )
          : (
            <div>
              <video
                className={(game.videoComponents[clientID] === game.isHost) ? style.videoHost : style.videoPlayer}
                key={clientID}
                ref={(instance: HTMLVideoElement) => { provideMediaRef(clientID, instance); }}
                playsInline
                autoPlay
                muted={clientID === LOCAL_VIDEO}
              >
                <track kind="captions" />
              </video>
            </div>
          )
      );
    })
  );
}
