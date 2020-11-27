import React from "react";
import ContactForm from "./ContactForm";
import Container from "./Container";
import useTitle from "../hooks/useTitle";

const Contact = () => {
	useTitle("Contact");
	return (
		<Container className>
			<h1>Contact</h1>
			<ContactForm />
		</Container>
	);
};

export default Contact;
