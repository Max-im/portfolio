import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";
import fs from "fs";
import path from "path";
import routes from "./routes";
import { errorHandler } from "./errorHandling";

const app = express();

// settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "production") {
  const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a",
  });
  app.use(logger("combined", { stream: logStream }));
  app.use(helmet());
} else {
  app.use(logger("dev"));
}

// routes
app.use("/", routes);
app.use(errorHandler);

module.exports = app;
