import * as express from "express";
import { Request, Response } from "express";
import * as path from "path";
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

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'app')));

//Tạo router
app.get("/", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname + '/app/chat.html'));
});

//Tạo socket 
io.on('connection', function (socket: any) {
  console.log('Welcome to server chat');

  socket.on('send', function (data: any) {
    io.sockets.emit('send', data);
  });
});

//Khởi tạo 1 server listen tại 1 port
server.listen(3000);