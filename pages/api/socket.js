import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("First use: initiating handshake");
    const io = new Server(res.socket.server);
    res.socket.server.io = io
    io.on("connection", (socket) => {
      console.log("User Connected");
      //socket.broadcast.emit("User connected");
      socket.on("message", (message) => {
        console.log(message);
        io.emit('message', '${message}')
      });
    });
  } else {
    console.log("Socket already established");
  }
  res.end();
}
