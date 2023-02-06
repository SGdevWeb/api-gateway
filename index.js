const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const helmet = require("helmet");
const controller = require('./controller/controllers');
require('dotenv').config()

const port = process.env.SERVER_PORT;

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const { name = "user" } = req.query;
    res.send(`Hello ${name}!`);
  });

app.use(controller)

app.listen(port, ()=>{
    console.log('serveur run on port '+port);
});