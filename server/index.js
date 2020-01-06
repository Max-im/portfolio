import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import routes from "./routes";
import { errorHandler } from "./errorHandling/errorHandlers";

const app = express();

// settings
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
logger("dev");

// routes
app.use("/", routes);
app.use(errorHandler);

module.exports = app;
