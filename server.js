const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"))

app.get('/', (req, res) => res.render('index'));

const port = process.env.PORT || 3100;

app.listen(port);