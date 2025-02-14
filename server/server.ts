import http from "http";
import express from "express";
import { Server } from "socket.io";

const PORT = 8000;
const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Socket.io server is up!");
});

// Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Someone connected with id: ${socket.id}`);

  // When a user joins
  socket.on("user", (name) => {
    socket.broadcast.emit("new_user", name);
  });

  // When a message is sent
  socket.on("message", (msg) => {
    console.log(msg);
    socket.broadcast.emit("new_message", msg);
  });

  // When a user is typing
     socket.on("typing", (obj) => {
    console.log(obj);
    socket.broadcast.emit("user_typing", obj);
  });
});

server.listen(PORT, () => {
  console.log(`Server started, listening on port:${PORT}!`);
});