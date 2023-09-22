const  bodyParser = require( "express");
const express = require("express");
const app = express();
const userLoan = require("./user-loan");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user-loan", userLoan);

module.exports = app;
