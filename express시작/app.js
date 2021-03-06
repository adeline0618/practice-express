const express = require('express');

const app = express();
const port = 3000;

//req : 사용자의 리퀘스트
//res : 내가 보여줄 response

app.get('/', (req, res) => {
  res.send('hello express');
});

//포트 지정.  == http.createServer().listen(3000)
app.listen(port, () => {
  console.log('Express listening on port', port);
});

// get 요청 : 클라이언트가 웹브 URL창에 쳤을 때
