const http = require("http");

const websocket = require("ws");

const server = http.createServer((rep, res) => {
  res.end("I am Connected");
});

const wss = new websocket.Server({ server: server });

wss.on("headers", (header, req) => {
  //   console.log(header, req);
});

wss.on("connection", (ws, req) => {
  ws.send("Hey, Connected");
  wss.on("message", (data) => {
    console.log(data);
  });
});

const port = process.env.PORT || 5000;

server.listen(port);
