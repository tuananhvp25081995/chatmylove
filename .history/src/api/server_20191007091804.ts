import *as express from "express";
const app = express();
import bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
import * as mysql from "mysql";
import { ConfigDatabase } from "./config/enum";
import { apiUserRouter } from "./routes/user.route";
import { apiAdminRouter } from "./routes/admin.route";

export const connection = mysql.createConnection({
  host: ConfigDatabase.host,
  user: ConfigDatabase.user,
  password: ConfigDatabase.password,
  database: ConfigDatabase.database,
});
connection.connect();

const PORT = 3000;
app.listen(PORT, function () {
  console.log('Server listening on port' + PORT);
})

app.use('/api/user', apiUserRouter);
app.use('/api/admin', apiAdminRouter);