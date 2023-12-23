const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('<h1>A node app</h1>');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

// const http = require('http');

// const port = process.env.PORT || 3000;

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello, World!\n');
//   })
//   .listen(port);

// console.log(`App is running... (port: ${port})`);
