import *as express from "express";
import { Request, Respone }
const app = express();
import bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.get('/', function(req, res) {

})

const PORT = 3000;
app.listen(PORT, function () {
  console.log('Server listening on port' + PORT);
});
