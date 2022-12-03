const http = require("http");

const routes = require("./route2");

console.log("server checking restart");

const server = http.createServer(routes.handler);

server.listen(8000);
