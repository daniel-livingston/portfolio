import React from "react";
import ContactForm from "./ContactForm";
import useTitle from "../hooks/useTitle";

const Contact = () => {
	useTitle("Contact");
	return (
		<div id='content' className='container'>
			<div className='wrapper'>
				<h1>Contact</h1>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
