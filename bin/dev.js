#!usr/bin/env node

// eslint-disable-next-line
require("@babel/register");

// eslint-disable-next-line
const cors = require("cors");
const app = require("../server");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Handle 404
app.get("*", (req, res) => res.status(404).send());

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.info("server run"));
