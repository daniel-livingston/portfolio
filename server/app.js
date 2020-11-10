const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const favicon = require("serve-favicon");
const morgan = require("morgan");
const { sendToMe } = require("./email/email");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(morgan("dev"));
app.use(favicon(path.resolve(__dirname, "../public/favicon/favicon.ico")));

app.post("/contact", (req, res) => {
	const handleResponse = (error) => {
		if (error) {
			return res.status(500).send(error);
		}
		res.status(200).send();
	};
	sendToMe(
		{
			name: req.body.name,
			email: req.body.email,
			subject: req.body.subject,
			message: req.body.message,
		},
		handleResponse
	);
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = { app };
