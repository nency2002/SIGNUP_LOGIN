const express = require("express");
const connect = require("./config/db");
const rounter = require("./routes/use.route");
const app = express();
app.use(express.json());
app.use(rounter)



app.listen(8090, () => {
  console.log("connect to mongodb");
  connect()
});
