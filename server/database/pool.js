const { Sequelize } = require('sequelize');

//                                 БД          Логин            Пароль
const sequelize = new Sequelize('raccoon', 'raccoonAdmin', 'P59NYzkar-3_]Mmy', {
  host: 'localhost', // Имя хоста
  dialect: 'mysql', // Диалект
  logging: false, // отключаем логирование запросов в консоль
  port: 3325, // Порт БД
});

module.exports = sequelize;

// pass - P59NYzkar-3_]Mmy