const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.disable("x-powered-by");

// Add middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add your router below

const screensRouter = require("./routers/screens.router");
app.use("/screens", screensRouter);

const ticketsRouter = require("./routers/ticket.router");
app.use("/tickets", ticketsRouter);

module.exports = app;
