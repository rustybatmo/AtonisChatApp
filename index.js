const express = require("express");
const socket = require("socket.io");
const app = express();

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Listening to requests on port 4000");
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", (client) => {
  console.log("Something is being sent");
  client.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
  // console.log("Made socket connection", client.id);
});
