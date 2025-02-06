import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
}); // Socket.io ko instantiate kar diya

// Jab bhi koi client connect karega
io.on("connection", (socket) => {
  console.log("Someone connected! 😈", socket.id);

  socket.on("emoji", (data) => {
    socket.broadcast.emit("new_emoji", data);
    // socket.broadcast.emit (only leaving the one that sent)
    // io.emit (send to everyone)
    // socket.emit (to send back to the one that started)
  });
});

server.listen(8000, () => {
  console.log(`Server started, listening on port 8000!`);
});