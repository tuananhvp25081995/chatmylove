// import *as express from "express";
// import { Request, Response } from "express";
// const app = express();
// import bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// app.get('/', function (req: Request, res: Response) {
//   res.sendfile(__dirname + "../app/index.html");
// });

// app.use(express.static('app'))

// const PORT = 3000;
// app.listen(PORT, function () {
//   console.log('Server listening on port' + PORT);
// });

var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'public')));

//Tạo router
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/chat.html'));
});

//Tạo socket 
io.on('connection', function (socket) {
    console.log('Welcome to server chat');

    socket.on('send', function (data) {
        io.sockets.emit('send', data);
    });
});

//Khởi tạo 1 server listen tại 1 port
server.listen(3000);