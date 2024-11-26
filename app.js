const express = require('express');
const userRouter = require('./routes/userRoutes');
require('dotenv').config();

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