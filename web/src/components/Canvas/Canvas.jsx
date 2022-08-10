import '../../App.css';
import React, { useEffect, useRef } from 'react';
import CanvasContainer from '../CanvasContainer/CanvasContainer';

export default function Canvas() {
  const CANVAS_REF = useRef(null);

  const isDrawing = useRef(false);

  function startDrawing(event) {
    isDrawing.current = true;
    const canvas = CANVAS_REF.current;
    const context = canvas.getContext('2d');
    console.log('STARt');
    context.beginPath();
    const { event_offsetX, event_offsetY } = getCanvasOffset(event);
    context.lineTo(event_offsetX, event_offsetY);
    event.preventDefault();
  }

  function getCanvasOffset(event) {
    let currentTargetRect = event.currentTarget.getBoundingClientRect();
    const event_offsetX = event.pageX - currentTargetRect.left,
      event_offsetY = event.pageY - currentTargetRect.top;

    return { event_offsetX, event_offsetY };
  }

  function draw(event, socket) {
    if (isDrawing.current) {
      const canvas = CANVAS_REF.current;
      const context = canvas.getContext('2d');
      const { event_offsetX, event_offsetY } = getCanvasOffset(event);
      console.log(event_offsetX, event_offsetY);
      // console.log(event);
      socket.send(
        JSON.stringify({
          method: 'draw',
          // id: id,
          figure: {
            x: event_offsetX,
            y: event_offsetY,
          },
        })
      );
      context.lineTo(event_offsetX, event_offsetY);

      context.strokeStyle = 'black';
      context.lineWidth = '3px';
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.stroke();
    }
    event.preventDefault();
  }

  function stopDrawing(event) {
    if (isDrawing.current) {
      const canvas = CANVAS_REF.current;
      const context = canvas.getContext('2d');
      console.log('STOP');

      context.stroke();
      context.closePath();
      isDrawing.current = false;
    }
    event.preventDefault();
  }

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:4000/canvas`);
    socket.onopen = () => {
      console.log('Подключение установлено');
      socket.send(
        JSON.stringify({
          // id:params.id,
          // username: canvasState.username,
          method: 'connection',
        })
      );
    };
    socket.onmessage = (event) => {
      let msg = JSON.parse(event.data);
      switch (msg.method) {
        case 'connection':
          console.log(`пользователь {msg.username} присоединился`);// поправить
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
      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mousemove', (event) => draw(event, socket));
      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('mouseout', stopDrawing);

      return () => {
        canvas.removeEventListener('mousedown', startDrawing);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopDrawing);
        canvas.removeEventListener('mouseout', stopDrawing);
      };
    }
  }, []);

  const drawHandler = (msg) => {
    const canvas = CANVAS_REF.current;
    console.log('canvas: ', canvas);
    if (canvas) {
      const context = canvas.getContext('2d');
      context.lineTo(msg.x, msg.y);
      console.log('yes');
      context.strokeStyle = 'black';
      context.lineWidth = '3px';
      context.lineCap = 'round';
      context.lineJoin = 'round';

      context.stroke();
    }
  };

  return (
    <div>
      <CanvasContainer CANVAS_REF={CANVAS_REF} />
    </div>
  );
}
