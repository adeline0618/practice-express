const express = require('express');
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');
const app = express();
const port = 3000;

//req : 사용자의 리퀘스트
//res : 내가 보여줄 response

app.get('/', (req, res) => {
  res.send('hello express');
});
app.get('/Swan', (req, res) => {
  res.send('hello Sion' + ' hello Woochoo');
});
app.use('/admin', admin);
app.use('/contacts', contacts);

//포트 지정.  == http.createServer().listen(3000)
app.listen(port, () => {
  console.log('Express listening on port', port);
});
