const { Sequelize, DataTypes } = require('sequelize');

// 실제 MySQL 데이터베이스 정보로 수정하세요.
const sequelize = new Sequelize('display', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = { sequelize, DataTypes };
