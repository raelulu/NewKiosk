const express = require('express');
// 백앤드 서버와 같은 포트를 쓸수없어서 cors를 피하기위해 모듈 부르기
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3001;

//미들웨어로 cors 어떤 주소에서 요청을 보내도 에러가 뜨지 않는다.
app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));
// post 데이터 인식
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes/index');
app.use('/', router);

app.get('*', (req, res) => {
  // res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
  if (res.status === 400) {
    res.send('없는 라우터입니다.');
  } else {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`백앤드 서버가 ${PORT}번에서 작동 중`);
});
