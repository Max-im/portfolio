#!usr/bin/env node

// eslint-disable-next-line
require("@babel/register");
// eslint-disable-next-line
require("dotenv").config({ path: "./src/server/config/variables.env" });

// eslint-disable-next-line
const express = require("express");
const cors = require("cors");
const app = require("../src/server");
const path = require("path");

app.use(express.static(path.join(__dirname, "../src")));
app.use(cors());

// 404
app.get("*", (req, res) => res.status(404).send());

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.info("server run"));
