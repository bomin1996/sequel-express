const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Sequelize 인스턴스 생성 (MySQL 연동)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// 데이터베이스 동기화
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = { sequelize, DataTypes };