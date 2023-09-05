const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
// const {Server} = require('socket.io');
// const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log("A user connected");
    socket.send("socket.send()!!!!!!!!!!!!!!!")
    socket.on('message', (msg) => {
        console.log("message chat triggred");
        socket.broadcast.emit('message', msg);
    });
    socket.emit('message', 'Welcome to cyber chat.!!!!!!'); // socket.send()
});

// io.on('connect', function (text) {
//     console.log("opened!!!!");
// })
server.listen(3008,function () {
    console.log('Server running on port 3008');
    
})
