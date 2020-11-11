import React from "react";
import ContactForm from "./ContactForm";
import useTitle from "../hooks/useTitle";

const Contact = () => {
	useTitle("Contact");
	return (
		<div className='feature container'>
			<div className='wrapper'>
				<h1>Contact</h1>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
