//express 없이 서버 만들어보기.

//http 내장 모듈이다.
const http = require('http');
//서버를 띄우는 함수 (express안쓰고.)
//포트 3000인 서버를 띄워달라  http.createServer().listen(3000);
//내가 작성하는 리스폰스 응답 객체만 사용자가 볼 수 있다.
http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello Server');
    response.end();
  })
  .listen(3000);
