const http = require("http");
const server = http.createServer((req, res) => {
  res.write("afsar");
});
server.listen(4000);
