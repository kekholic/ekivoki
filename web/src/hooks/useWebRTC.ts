import {
  MutableRefObject,
  useCallback, useEffect, useRef, useState,
} from 'react';
import freeice from 'freeice';
import { listeners } from 'process';
import socket from '../socket';
import ACTIONS from '../socket/actions';
import useStateWithCallback from './useStateWithCallback';

export const LOCAL_VIDEO = 'LOCAL_VIDEO';

export default function useWebRTC(roomID: string) {
  const [clients, setClients] = useStateWithCallback([]);

  // (alias) useCallback<(newClient: any, cb: any) => void>(callback: (newClient: any, cb: any) => void, deps: React.DependencyList): (newClient: any, cb: any) => void

  const addNewClient = useCallback<any>(
    (newClient: any, cb: any) => {
      if (!clients.includes(newClient)) {
        setClients((list: Array<any>) => [...list, newClient], cb);
      }
    },
    [clients, setClients],
  );

  const peerConnections = useRef<any>({});
  const localMediaStream = useRef<any>(null);
  const peerMediaElements = useRef<any>({
    [LOCAL_VIDEO]: null,
  });

  // Логика подключения Видео других пользователей
  useEffect(() => {
    async function handleNewPeer({ peerID, createOffer }) {
      if (peerID in peerConnections.current) {
        return console.warn(`Already connected to peer ${peerID}`);
      }
      const ice = freeice();
      console.log(ice);

      peerConnections.current[peerID] = new RTCPeerConnection({
        iceServers: [{
          urls: ['stun:stun3.l.google.com:19302'],
        }],
        // iceServers: [freeice()[0]],
      });
      console.log('Внутри аqссервера');

      peerConnections.current[peerID].onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit(ACTIONS.RELAY_ICE, {
            peerID,
            iceCandidate: event.candidate,
          });
        }
      };

      let trackNumber = 0;
      peerConnections.current[peerID].ontrack = ({ streams: [remoteStream] }) => {
        trackNumber++;

        if (trackNumber === 2) { // ждем видео и аудиоо
          addNewClient(peerID, () => {
            peerMediaElements.current[peerID].srcObject = remoteStream;
          });
        }
      };

      localMediaStream.current.getTracks().forEach((track) => {
        peerConnections.current[peerID].addTrack(track, localMediaStream.current);
      });

      if (createOffer) {
        const offer = await peerConnections.current[peerID].createOffer();

        await peerConnections.current[peerID].setLocalDescription(offer);

        socket.emit(ACTIONS.RELAY_SDP, {
          peerID,
          sessionDescription: offer,
        });
      }
    }
    socket.on(ACTIONS.ADD_PEER, handleNewPeer);
  }, []);

  // Пордписка на сессию после получения запроса на подключение
  useEffect(() => {
    async function setRemoteMedia({ peerID, sessionDescription: remoteDescription }) {
      await peerConnections.current[peerID].setRemoteDescription(
        new RTCSessionDescription(remoteDescription),
      );

      if (remoteDescription.type === 'offer') {
        const answer = await peerConnections.current[peerID].createAnswer();
        await peerConnections.current[peerID].setLocalDescription(answer);

        socket.emit(ACTIONS.RELAY_SDP, {
          peerID,
          sessionDescription: answer,
        });
      }
    }
    socket.on(ACTIONS.SESSION_DESCRIPTION, setRemoteMedia);
  }, []);

  // реагирование на нового айс кандидата
  useEffect(() => {
    socket.emit(ACTIONS.ICE_CANDIDATE, ({ peerID, iceCandidate }) => {
      peerConnections.current[peerID].addIceCandidate(
        new RTCIceCandidate(iceCandidate),
      );
    });
  }, []);

  // логика реагирования на выход из комнаты
  useEffect(() => {
    const handleRemovePeer = ({ peerID }) => {
      if (peerID in peerConnections.current) {
        peerConnections.current[peerID].close();
      }
      delete peerConnections.current[peerID];
      delete peerMediaElements.current[peerID];

      setClients((list) => list.filter((client) => client !== peerID));
    };
    socket.on(ACTIONS.REMOVE_PEER, handleRemovePeer);
  }, []);

  // Логика подключения Своего видео
  useEffect(() => {
    async function startCapture() {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: 800,
          height: 600,
        },
      });

      addNewClient(LOCAL_VIDEO, () => {
        const localVideoElement : any = peerMediaElements.current[LOCAL_VIDEO];
        if (localVideoElement) {
          localVideoElement.volume = 0;
          localVideoElement.srcObject = localMediaStream.current;
        }
      });
    }

    startCapture()
      .then(() => socket.emit(ACTIONS.JOIN, { room: roomID }))
      .catch((error) => console.log(`Error getting UserMedia: ${error}`));

    return () => {
      localMediaStream.current.getTracks().forEach((track) => track.stop());
      socket.emit(ACTIONS.LEAVE);
    };
  }, [roomID]);

  const provideMediaRef = useCallback((id : string, node : HTMLVideoElement | null) => {
    peerMediaElements.current[id] = node;
  }, []);

  return { clients, provideMediaRef };
}
