const http = require("http");
const fs = require("fs");
// const data = fs.readFileSync("message.txt", "utf8");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" || url === "/home") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    try {
      var data = fs.readFileSync("message.txt", "utf8");
      res.write(data.toString());
    } catch (e) {
      console.log("Error:", e);
    }
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");

    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/home");
      return res.end();
    });
  }
});

server.listen(8000);
