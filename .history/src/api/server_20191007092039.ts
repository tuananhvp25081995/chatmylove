import *as express from "express";
const app = express();
import bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;
app.listen(PORT, function () {
  console.log('Server listening on port' + PORT);
})
