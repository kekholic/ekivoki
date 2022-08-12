/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
require('dotenv').config(); // подключение переменных env

const express = require('express'); // подключение  express
const morgan = require('morgan'); // подключение  morgan
const path = require('path');
const cookieParser = require('cookie-parser');

const cors = require('cors');

const app = express(); // создание версии сервера express'a
const WSServer = require('express-ws')(app);
const errorMiddleware = require('./src/middlewares/error-middleware');

const { PORT } = process.env; // получение переменных env

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

const aWss = WSServer.getWss();

const authRouter = require('./src/routes/authRouter');

app.use(express.static(path.join(__dirname, 'public'))); // подключение  public директории

app.use(morgan('dev')); // добавление настроек и инициализация morgan

app.use(express.urlencoded({ extended: true })); // добавление отлова post запросов.
app.use(express.json()); // парсинг post запросов в json.

app.use('/auth', authRouter);

app.ws('/canvas', (ws, req) => {
  ws.on('message', (msg) => {
    const mesg = JSON.parse(msg);
    switch (mesg.method) {
      case 'connection':
        connectionHandler(ws, mesg);
        break;
      case 'draw':
        broadcastConnection(ws, mesg);
        break;

      default:
        break;
    }
  });
});
const connectionHandler = (ws, msg) => {
  ws.id = msg.id;
  broadcastConnection(ws, msg);
};

const broadcastConnection = (ws, msg) => {
  aWss.clients.forEach((client) => {
    client.send(JSON.stringify(msg));
    if (client.id === msg.id) {
    }
  });
};
console.log('test');

app.use(errorMiddleware);
app.listen(PORT, async () => {
  console.log(`Сервер запущен на порте ${PORT}! `);
});
