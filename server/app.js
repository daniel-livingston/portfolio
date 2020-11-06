const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));
app.use(express.static("dist"));
app.use(morgan("dev"));
app.use(favicon(path.resolve(__dirname, "../public/favicon/favicon.ico")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = { app };
