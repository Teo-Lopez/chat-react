const socketio = require("socket.io");

module.exports = server => {
  const io = socketio(server).listen(3005);
  io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("mensajeria", m => {
      console.log(`NUEVO MENSAJE: ${m}`);
      socket.broadcast.emit("front", m);
    });
  });
};
