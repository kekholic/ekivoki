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
    origin: '*',
  },
});

// const WSServer = require('express-ws')(app);

// module.exports = WSServer;
const errorMiddleware = require('./src/middlewares/error-middleware');

// const GameController = require('./src/controllers/gameControllers');

const { PORT } = process.env; // получение переменных env

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

// const aWss = WSServer.getWss();

const authRouter = require('./src/routes/authRouter');
const gameRouter = require('./src/routes/gameRouter');
// const authMiddleware = require('./src/middlewares/authMiddleware');
// const gameService = require('./src/service/gameService');

app.use(express.static(path.join(__dirname, 'public'))); // подключение  public директории

app.use(morgan('dev')); // добавление настроек и инициализация morgan

app.use(express.urlencoded({ extended: true })); // добавление отлова post запросов.
app.use(express.json()); // парсинг post запросов в json.

app.use('/auth', authRouter);
app.use('/game', gameRouter);

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
io.on('connection', (socket) => {
  console.log('socket connection', socket.id);
  socket.on('join_room', (msg) => {
    console.log(msg);
    socket.join(msg.id);
    socket.to(msg.id).emit('resive_message', msg);
  });
  socket.on('send_message', (msg) => {
    socket.to(msg.id).emit('resive_message', msg);
  });
  // const message = JSON.parse(msg);
  /* switch (message.method) {
      case 'connection':
        gameService.gameConnections(ws, mesg);
        break;
      case 'draw':
        // broadcastConnection(ws, mesg);
        break;

      default:
        break;
    } */
  // socket.broadcast.emit('resive_message', msg);
});

app.use(errorMiddleware);
server.listen(PORT, async () => {
  console.log(`Сервер запущен на порте ${PORT}! `);
});
