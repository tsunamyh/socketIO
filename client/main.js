const { io } = require('socket.io-client')
// import { io } from "socket.io-client";

socket = io('http://localhost:3008')

socket.on('disconnect', function () {
    console.log('Disconnected from server');
})

socket.on('connect', function () {
    console.log('Connected to server')
    socket.emit("message","message from client")
})

socket.on('message', function (message) {
    console.log("on message",message)
})
