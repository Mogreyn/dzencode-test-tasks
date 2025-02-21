import { Server } from 'socket.io';

const io = new Server(5173, {
  cors: {
    origin: '*',
  },
});

let activeSessions = 0;

io.on('connection', (socket) => {
  activeSessions++;
  io.emit('sessionCount', activeSessions);

  socket.on('disconnect', () => {
    activeSessions--;
    io.emit('sessionCount', activeSessions);
  });
});
