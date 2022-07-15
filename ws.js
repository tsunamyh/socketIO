const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app).listen(3000);
// const io = require('socket.io')(server);
const {Server} = require('socket.io');
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        socket.broadcast.emit('message', msg);
    });
    socket.emit('message', 'Welcome to cyber chat.');
    console.log("A user connected");
});
console.log('Server running on port 3000');