const port = 3000;

const express = require("express");
const bodyParser = require("body-parser"); // used for parsing form data
const routes = require("./routes/routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
