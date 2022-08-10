/* eslint-disable consistent-return */
import '../../App.css';
import React, { useEffect, useRef } from 'react';
import CanvasContainer from '../CanvasContainer/CanvasContainer.jsx';

export default function Canvas() {
  const id = Math.random();
  const CANVAS_REF = useRef(null);

  const isDrawing = useRef(false);

  const drawHandler = (msg) => {
    const canvas = CANVAS_REF.current;
    console.log('isDrawing: ', isDrawing);
    if (canvas && isDrawing.current === false && msg.id !== id) {
      const context = canvas.getContext('2d');
      if (msg.figure.START) {
        context.beginPath();
        context.lineTo(msg.figure.x, msg.figure.y);
      }
      if (msg.figure.x) {
        context.lineTo(msg.figure.x, msg.figure.y);
        console.log('yes');
        context.strokeStyle = 'black';
        context.lineWidth = '3px';
        context.lineCap = 'round';
        context.lineJoin = 'round';

        context.stroke();
      }
      if (msg.figure.STOP) {
        context.closePath();
      }
    }
  };

  function getCanvasOffset(event) {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.pageX - currentTargetRect.left;
    const eventOffsetY = event.pageY - currentTargetRect.top;

    return { eventOffsetX, eventOffsetY };
  }

  function startDrawing(event, socket) {
    isDrawing.current = true;
    const canvas = CANVAS_REF.current;
    const context = canvas.getContext('2d');
    console.log('STARt');
    context.beginPath();
    const { eventOffsetX, eventOffsetY } = getCanvasOffset(event);
    socket.send(
      JSON.stringify({
        method: 'draw',
        id,
        figure: {
          START: 'START',
          x: eventOffsetX,
          y: eventOffsetY,
        },
      }),
    );
    context.lineTo(eventOffsetX, eventOffsetY);
    event.preventDefault();
  }

  function draw(event, socket) {
    if (isDrawing.current) {
      const canvas = CANVAS_REF.current;
      const context = canvas.getContext('2d');
      const { eventOffsetX, eventOffsetY } = getCanvasOffset(event);
      console.log(eventOffsetX, eventOffsetY);
      // console.log(event);
      socket.send(
        JSON.stringify({
          method: 'draw',
          id,
          figure: {
            x: eventOffsetX,
            y: eventOffsetY,
          },
        }),
      );
      context.lineTo(eventOffsetX, eventOffsetY);

      context.strokeStyle = 'black';
      context.lineWidth = '3px';
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.stroke();
    }
    event.preventDefault();
  }

  function stopDrawing(event, socket) {
    if (isDrawing.current) {
      const canvas = CANVAS_REF.current;
      const context = canvas.getContext('2d');
      console.log('STOP');
      socket.send(
        JSON.stringify({
          method: 'draw',
          id,
          figure: {
            STOP: 'STOP',
          },
        }),
      );

      context.stroke();
      context.closePath();
      isDrawing.current = false;
    }
    event.preventDefault();
  }

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000/canvas');
    socket.onopen = () => {
      console.log('Подключение установлено');
      socket.send(
        JSON.stringify({
          // id:params.id,
          // username: canvasState.username,
          method: 'connection',
        }),
      );
    };
    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      switch (msg.method) {
        case 'connection':
          console.log('пользователь {msg.username} присоединился'); // поправить
          break;

        case 'draw':
          drawHandler(msg);
          break;
        default:
          break;
      }
    };

    const canvas = CANVAS_REF.current;
    console.log('canvas: ', canvas);
    canvas.width = 800;
    canvas.height = 600;

    if (canvas) {
      canvas.addEventListener('mousedown', (event) => {
        startDrawing(event, socket);
      });
      canvas.addEventListener('mousemove', (event) => draw(event, socket));
      canvas.addEventListener('mouseup', (event) => {
        stopDrawing(event, socket);
      });
      canvas.addEventListener('mouseout', (event) => {
        stopDrawing(event, socket);
      });

      return () => {
        canvas.removeEventListener('mousedown', startDrawing);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopDrawing);
        canvas.removeEventListener('mouseout', stopDrawing);
      };
    }
  }, []);

  return (
    <div>
      <CanvasContainer CANVAS_REF={CANVAS_REF} />
    </div>
  );
}
