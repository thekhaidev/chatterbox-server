/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.

var messages = [];

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, Authorization',
  'access-control-max-age': 10 // Seconds.
};

var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/


  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = 'text/plain';

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  // console.log(response);

  if (request.url === '/classes/messages') {

    if (request.method === 'OPTIONS') {
      var statusCode = 200;
      response.writeHead(statusCode, headers);
      response.end();

    } else if (request.method === 'POST') {
      var body = [];
      request.on('data', (data) => {
        body.push(data);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        messages.push(JSON.parse(body));
        var statusCode = 201;
        response.writeHead(statusCode, headers);
        response.end();
      });

    } else if (request.method === 'GET') {
      var statusCode = 200;
      response.writeHead(statusCode, headers);
      var resp = {};
      console.log(messages);
      resp.results = messages;
      response.end(JSON.stringify(resp));
    }
  } else {
    var statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end();
  }



  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.

};



exports.requestHandler = requestHandler;