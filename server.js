// this REQUIRES the http module that ships with Node.js
// and makes it accesible through the variable http
var http = require("http");
var url = require("url");

// we then call the function createServer from the http module
// this function returns an object and this object has a method named listen

//the parameter of the createServer function is itself a function
// i.e. we are passing createServer and anonymous function

function start(route) {

  function processResponse(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("request for " + pathname + " received!");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hello there world");
    response.end();
  }

  http.createServer(processResponse).listen(8888);

  console.log("server has started...");  
}

exports.start = start;
