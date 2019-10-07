import *as express from "express";
const app = express();
import bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = require("http").createServer(app);
const io = require("socket.io")(server)

const PORT = 3000;
app.listen(PORT, function () {
  console.log('Server listening on port' + PORT);
});
