import * as io from 'socket.io-client';

export const socket = io('http://localhost:6075');
socket.on('connect', (data) => {
  console.log('connected!', data);
  socket.emit('message', { message: "hello!" });
})

