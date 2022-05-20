const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");
const app = express();

app.use(bodyParser.json()); //application/json
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // you could set specific domain insted of * ex:codepen.io
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE"); ///methods allowed
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization"); //headers on requestes
  next(); //know all response will be accepted from front-end
});
app.use("/feed", feedRoutes);

app.listen(8080);
