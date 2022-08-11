import React, { useState } from 'react';
import { useParams } from 'react-router';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';
import VideoComponent from './VideoComponent';

type Props = {}

export default function Room({}: Props) {
  const { id: roomID } = useParams<Record<string, string | undefined>>();
  const [isParams, setisParams] = useState('');
  // console.log(id);
  // let clients;
  // let provideMediaRef: (id: string, node : HTMLVideoElement | null) => void
  // let provideMediaRef: any

  if (roomID) {
    return (
      <VideoComponent roomID={roomID} />

    );
  }
  return (
    <h1>Войдите в комнату</h1>
  );
}
