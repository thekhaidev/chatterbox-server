var express = require('express');
var cors = require('cors');

var app = express();
var port = 3000;


app.use(cors());
app.use(express.json());


var messages = [];

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, Authorization',
  'access-control-max-age': 10 // Seconds.
};
var headers = defaultCorsHeaders;

headers['Content-Type'] = 'text/plain';

////define requsest handlers

// app.all('*', (req) => {
//   console.log(req.url);
// });


app.get('/', (req, res) => {
  var statusCode = 200;
  res.writeHead(statusCode, headers);
  res.end('Heres the page');
});

app.get('/classes/messages', (req, res) => {
  var statusCode = 200;
  res.writeHead(statusCode, headers);
  var resp = {};
  // console.log(messages);
  resp.results = messages;
  res.end(JSON.stringify(resp));

});

app.post('/classes/messages', (req, res) => {
  messages.push(req.body);
  // console.log(messages);
  var statusCode = 201;
  res.writeHead(statusCode, headers);
  res.end();
});


app.listen(port, () => {
  console.log('Listening on http://' + port);
});

