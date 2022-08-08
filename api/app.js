require('dotenv').config(); // подключение переменных env

const express = require('express'); // подключение  express
const morgan = require('morgan'); // подключение  morgan
const path = require('path');



const { PORT } = process.env; // получение переменных env

const app = express(); // создание версии сервера express'a


app.use(express.static(path.join(__dirname, 'public'))); // подключение  public директории

app.use(morgan('dev')); // добавление настроек и инициализация morgan

app.use(express.urlencoded({ extended: true })); // добавление отлова post запросов.
app.use(express.json()); // парсинг post запросов в json.

// здесь ваш код.


// ! запуск сервера где PORT это порт вашего сервера.
// ! если не подключали .env то замените на цифры(например по умолчанию 3000)
app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}! `);
});
