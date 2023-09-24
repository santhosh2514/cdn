const http = require("http");
const pid = process.pid;

const server = http.createServer();

server.on("request", (req, res) => {

  if (req.url === "/compute") {
    let sum = 0
    for (let i = 0; i < 1e7; i++);
    res.end("Ok")
  } else {
    res.end("Ok");
  }
});

process.on("message", msg => {
    console.log(`Message from master: ${msg}`);
  });
  
server.listen(3003, () => {
    console.log(`Started process ${pid}`);
});