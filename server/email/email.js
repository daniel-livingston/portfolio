const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendToMe = ({ name, email, subject, message } = {}, callback) => {
	if (!name || !email || !subject || !message) {
		return { error: "Invalid input" };
	}
	sgMail
		.send({
			to: process.env.EMAIL,
			from: process.env.EMAIL,
			subject,
			text: message + "\n\nSent from: " + name + " at email address: " + email,
		})
		.then(() => callback(undefined))
		.catch((error) => callback(error));
};

module.exports = { sendToMe };
