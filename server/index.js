const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname,'../client')));

io.on('connection',(socket)=>{
    console.log('A user connected');

    socket.on('message',(msg)=>{
        console.log('Message received',msg)
        io.emit('message',msg)
    })

    socket.on('disconnect',()=>{
        console.log('A user disconnected')
    })

})

server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
})