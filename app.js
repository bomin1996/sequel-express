const express = require('express');
const userRouter = require('./routes/userRoutes');

// Express 앱 생성
const app = express();
const port = 3000;

// JSON 요청 바디 파싱을 위한 미들웨어 추가
app.use(express.json());

// 사용자 라우터 설정
app.use('/users', userRouter);

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// models/index.js
const { Sequelize, DataTypes } = require('sequelize');

// Sequelize 인스턴스 생성 (MySQL 연동)
const sequelize = new Sequelize('testdb', 'username', 'password', {
    host: 'localhost',
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