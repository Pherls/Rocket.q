/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require("express");

const route = express.Router();

route.get("/", (req, res) => res.render("index"));

module.exports = route;
