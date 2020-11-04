const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));
app.use(express.static("dist"));
app.use(morgan("dev"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {});
