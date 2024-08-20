const net = require('net');

const server = net.createServer((socket) => {
  // 'socket' is a duplex stream
  socket.write('Hello, client!\n');
  socket.pipe(socket); // Echo back to client
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
