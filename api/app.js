require('dotenv').config(); // подключение переменных env

const express = require('express'); // подключение  express
const morgan = require('morgan'); // подключение  morgan
const path = require('path');

const { PORT } = process.env; // получение переменных env

const app = express(); // создание версии сервера express'a

const WSServer = require('express-ws')(app);

const aWss = WSServer.getWss();

const authRouter = require('./src/routes/authRouter');

app.use(express.static(path.join(__dirname, 'public'))); // подключение  public директории

app.use(morgan('dev')); // добавление настроек и инициализация morgan

app.use(express.urlencoded({ extended: true })); // добавление отлова post запросов.
app.use(express.json()); // парсинг post запросов в json.

app.use('auth', authRouter);
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
    console.log(msg);
    client.send(JSON.stringify(msg));
    if (client.id === msg.id) {
    }
  });
};

app.listen(PORT, async () => {
  console.log(`Сервер запущен на порте ${PORT}! `);
});
