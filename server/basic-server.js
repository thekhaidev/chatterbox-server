var {requestHandler} = require('./request-handler.js');

var express = require('express');
var cors = require('cors');
// const bodyParser = require('body-parser');

var app = express();
var port = 3000;

var messages = [];
app.use(cors());
// app.use(bodyParser.urlencoded({extended: false }));
app.use(express.json());


var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, Authorization',
  'access-control-max-age': 10 // Seconds.
};
var headers = defaultCorsHeaders;

headers['Content-Type'] = 'text/plain';

////define requsest handlers
app.get('/', (req, res) => {
  var statusCode = 200;
  res.writeHead(statusCode, headers);
  res.end('Heres the page');
});

app.get('/classes/messages', (req, res) => {
  var statusCode = 200;
  res.writeHead(statusCode, headers);
  var resp = {};
  console.log(messages);
  resp.results = messages;
  res.end(JSON.stringify(resp));

});

app.post('/classes/messages', (req, res) => {
  console.log(req.body);
});



//  if (request.url === '/classes/messages') {

//   if (request.method === 'OPTIONS') {
//     var statusCode = 200;
//     response.writeHead(statusCode, headers);
//     response.end();

//   } else if (request.method === 'POST') {
//     var body = [];
//     request.on('data', (data) => {
//       body.push(data);
//     }).on('end', () => {
//       body = Buffer.concat(body).toString();
//       messages.push(JSON.parse(body));
//       var statusCode = 201;
//       response.writeHead(statusCode, headers);
//       response.end();
//     });
//   }
// } else {
//   var statusCode = 404;
//   response.writeHead(statusCode, headers);
//   response.end();
// }



app.listen(port, () => {
  console.log('Listening on http://' + port);
});

