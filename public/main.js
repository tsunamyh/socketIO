// const { io } = require('socket.io-client')
// import { io } from "socket.io-client";

socket = io('http://localhost:3000')

socket.on('disconnect', function () {
    setTiltle('Disconnected from server')
})

socket.on('connect', function () {
    setTiltle('Connected to server')
})

socket.on('message', function (message) {
    printMessage(message)
})

document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value)
    socket.emit('chat', input.value)
    input.value = "";
}

function setTiltle(title) {
    document.querySelector('h1').innerHTML = title
}

function printMessage(message) {
    var p = document.createElement('p')
    p.innerText = message
    document.querySelector('div.messages').appendChild(p)
}