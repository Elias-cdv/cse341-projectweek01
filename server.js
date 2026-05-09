const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Conectado a la DB y escuchando en el puerto ${port}`);
  }
});
