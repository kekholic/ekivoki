/* eslint-disable max-len */
import React, { ReactElement, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';
import { IvcProps } from '../../types/webRTC';
import style from './VideoComponent.module.css';

export default function VideoComponent(props: IvcProps): ReactElement {
  const { roomID } = props;
  const { clients, provideMediaRef } = useWebRTC(roomID);
  const { game } = useAppSelector((store) => store);
  // (game.videoComponents[clientID] == game.isHost) ? bigWindow : smallWindow
  const findUserName = (id: number): string => {
    const userName = game.playersPriority.find((el) => el.userId === id)?.username || '';
    return userName;
  };
  const [nick, setNick] = useState('');

  useEffect(() => {
    setNick('1');
  }, [game, clients]);
  return (
    clients?.map((clientID: string) => {
      console.log('id юзера', game.videoComponents[clientID], 'айди хоста', game.isHost, 'клайентID', clientID);
      return (
        (game.videoComponents[clientID] === game.isHost)
          ? (
            <div className={`${style.videoContainer} ${nick} ${style.videoContainerHost}`}>
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
              <span className={style.videoHostTitle}>Ведущий</span>
              {game.videoComponents[clientID]
                && <span className={style.videoUserName}>{findUserName(game.videoComponents[clientID])}</span>}
            </div>
          )
          : (
            <div className={`${style.videoContainer} ${nick} ${style.videoContainerPlayer}`}>
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
              {game.videoComponents[clientID]
                && <span className={style.videoUserName}>{findUserName(game.videoComponents[clientID])}</span>}
            </div>
          )
      );
    })
  );
}
