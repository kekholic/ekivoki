require('dotenv').config(); // подключение переменных env

const express = require('express'); // подключение  express
const morgan = require('morgan'); // подключение  morgan
const path = require('path');
const cors = require('cors');
const authRouter = require('./src/routes/authRouter');

const { PORT } = process.env; // получение переменных env

const app = express(); // создание версии сервера express'a

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public'))); // подключение  public директории

app.use(morgan('dev')); // добавление настроек и инициализация morgan

app.use(express.urlencoded({ extended: true })); // добавление отлова post запросов.
app.use(express.json()); // парсинг post запросов в json.

app.use('auth', authRouter);

app.use(errorMiddleware)

app.listen(PORT, async () => {
  console.log(`Сервер запущен на порте ${PORT}! `);
});
