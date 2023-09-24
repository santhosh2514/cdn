const http = require("http");

const server = http.createServer();
const { fork } = require('child_process');

server.on("request", (req, res) => {

  if (req.url === "/compute") {
    const forked = fork('compute.js');
    forked.send('start')
    forked.on('message', (msg) => {
        return res.end(`${msg}`);
    })
  } else {
    res.end("Ok");
  }
});

server.listen(3003);