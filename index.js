// this accesses our server module and assigns 
// it to the server variable
// its exported functions then become free to use
var server = require("./server");
var router = require("./route");

server.start(router.route);