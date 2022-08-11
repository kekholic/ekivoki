import React from 'react';
import { useParams } from 'react-router';
import VideoComponent from './VideoComponent';

export default function Room() {
  const { id: roomID } = useParams<Record<string, string | undefined>>();

  if (roomID) {
    return (
      <VideoComponent roomID={roomID} />

    );
  }
  return (
    <h1>Войдите в комнату</h1>
  );
}
