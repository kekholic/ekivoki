/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
require('dotenv').config(); // подключение переменных env

const express = require('express'); // подключение  express
const morgan = require('morgan'); // подключение  morgan
const path = require('path');
const cookieParser = require('cookie-parser');

const cors = require('cors');

const app = express(); // создание версии сервера express'a

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

const errorMiddleware = require('./src/middlewares/error-middleware');

const { PORT } = process.env; // получение переменных env

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

const authRouter = require('./src/routes/authRouter');
const gameRouter = require('./src/routes/gameRouter');
const ACTIONS = require('./wsforchat/actions');
const questionRouter = require('./src/routes/questionRouter');
// const authMiddleware = require('./src/middlewares/authMiddleware');

app.use(express.static(path.join(__dirname, 'public'))); // подключение  public директории

app.use(morgan('dev')); // добавление настроек и инициализация morgan

app.use(express.urlencoded({ extended: true })); // добавление отлова post запросов.
app.use(express.json()); // парсинг post запросов в json.

app.use('/auth', authRouter);
app.use('/game', gameRouter);
app.use('/question', questionRouter);

// app.ws('/game/:id', GameController.start);

// app.ws('/canvas', (ws, req) => {
//   ws.on('message', (msg) => {
//     const mesg = JSON.parse(msg);
//     switch (mesg.method) {
//       case 'connection':
//         connectionHandler(ws, mesg);
//         break;
//       case 'draw':
//         broadcastConnection(ws, mesg);
//         break;

//       default:
//         break;
//     }
//   });
// });
// const connectionHandler = (ws, msg) => {
//   ws.id = msg.id;
//   broadcastConnection(ws, msg);
// };

// const broadcastConnection = (ws, msg) => {
//   aWss.clients.forEach((client) => {
//     client.send(JSON.stringify(msg));
//     if (client.id === msg.id) {
//     }
//   });
// };
// io.on('connection', (socket) => {
//   console.log('socket connection', socket.id);
//   socket.on('join_room', (msg) => {
//     console.log(msg);
//     socket.join(msg.id);
//     socket.to(msg.id).emit('resive_message', msg);
//   });
//   socket.on('send_message', (msg) => {
//     socket.to(msg.id).emit('resive_message', msg);
//   });
//   // const message = JSON.parse(msg);
//   /* switch (message.method) {
//       case 'connection':
//         gameService.gameConnections(ws, mesg);
//         break;
//       case 'draw':
//         // broadcastConnection(ws, mesg);
//         break;

//       default:
//         break;
//     } */
//   // socket.broadcast.emit('resive_message', msg);
// });

// // const connectionHandler = (ws, msg) => {
// //   ws.id = msg.id;
// //   broadcastConnection(ws, msg);
// // };

// // const broadcastConnection = (ws, msg) => {
// //   aWss.clients.forEach((client) => {
// //     client.send(JSON.stringify(msg));
// //     if (client.id === msg.id) {
// //     }
// //   })
// // };

io.on('connection', (socket) => {
  // shareRoomsInfo();
  console.log('socket connection');

  socket.on(ACTIONS.JOIN, (config) => {
    const { room: roomID } = config;

    const { rooms: joinedRooms } = socket;

    if (Array.from(joinedRooms).includes(roomID)) {
      return console.warn(`Already joined to ${roomID}`);
    }

    const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

    clients.forEach((clientID) => {
      io.to(clientID).emit(ACTIONS.ADD_PEER, {
        peerID: socket.id,
        createOffer: false,
      });

      socket.emit(ACTIONS.ADD_PEER, {
        peerID: clientID,
        createOffer: true,
      });
    });

    socket.join(roomID);
  });

  // socket.on('game', (msg) => {
  //   switch (msg.method) {
  //     case 'initState':
  //       socket.to(msg.roomID).emit('gameAnswers', msg);
  //       break;
  //     case 'visibleState':
  //       socket.to(msg.roomID).emit('gameAnswers', msg);
  //       break;
  //     case 'questionState':
  //       socket.to(msg.roomID).emit('gameAnswers', msg);
  //       break;
  //     case 'tryAnswer':
  //       socket.to(msg.roomID).emit('gameAnswers', msg);
  //       break;
  //     case 'wrongAnswer':
  //       socket.to(msg.roomID).emit('gameAnswers', msg);
  //       break;
  //     default:
  //       break;
  //   }
  // });

  // вход игрока в существующую игру:
  socket.on('playerJoined', (msg) => {
    console.log(msg.roomID);
    socket.to(msg.roomID).emit('playerJoined', msg.user);
  });
  socket.on('sendNewGameState', (msg) => {
    setTimeout(() => { socket.to(msg.roomID).emit('sendNewGameStateBack', msg); }, 2000);
  });

  socket.on('modalAnswer', (msg) => {
    socket.to(msg.roomID).emit('modalAnswerOpen', msg);
  });

  socket.on('modalClose', (msg) => {
    socket.to(msg.roomID).emit('modalCloseFromBack', '');
  });

  function leaveRoom() {
    const { rooms } = socket;
    Array.from(rooms).forEach((roomID) => {
      const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);
      clients.forEach((clientID) => {
        io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
          peerID: socket.id,
        });

        socket.emit(ACTIONS.REMOVE_PEER, {
          peerID: clientID,
        });
      });
      socket.leave(roomID);
    });
    // shareRoomsInfo();
  }

  socket.on(ACTIONS.LEAVE, leaveRoom);
  socket.on('disconnecting', leaveRoom);

  socket.on(ACTIONS.RELAY_SDP, ({ peerID, sessionDescription }) => {
    io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, {
      peerID: socket.id,
      sessionDescription,
    });
  });

  socket.on(ACTIONS.RELAY_ICE, ({ peerID, iceCandidate }) => {
    io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, {
      peerID: socket.id,
      iceCandidate,
    });
  });
});

app.use(errorMiddleware);
server.listen(PORT, async () => {
  console.log(`Сервер запущен на порте ${PORT}! `);
});
