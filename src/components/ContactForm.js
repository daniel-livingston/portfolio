import React from "react";
import isEmail from "validator/lib/isEmail";

export default class ContactForm extends React.Component {
	state = {
		name: "",
		email: "",
		subject: "",
		message: "",
		showNameError: false,
		showEmailError: false,
		showSubjectError: false,
		showMessageError: false,
	};
	onSubmit = (e) => {
		e.preventDefault();

		const isValidName = !!e.target.name.value;
		const isValidEmail = isEmail(e.target.email.value);
		const isValidSubject = !!e.target.subject.value;
		const isValidMessage = !!e.target.message.value;

		if (isValidName && isValidEmail && isValidSubject && isValidMessage) {
			console.log("Submitted!");
		} else {
			this.showErrors(isValidName, isValidEmail, isValidSubject, isValidMessage);
		}
	};
	showErrors = (isValidName, isValidEmail, isValidSubject, isValidMessage) => {
		if (!isValidName) {
			this.setState(() => ({
				showNameError: true,
			}));
		}
		if (!isValidEmail) {
			this.setState(() => ({
				showEmailError: true,
			}));
		}
		if (!isValidSubject) {
			this.setState(() => ({
				showSubjectError: true,
			}));
		}
		if (!isValidMessage) {
			this.setState(() => ({
				showMessageError: true,
			}));
		}
	};
	onNameChange = (e) => {
		const name = e.target.value;
		if (this.state.showNameError && name) {
			this.setState(() => ({
				showNameError: false,
			}));
		}
		this.setState(() => ({
			name,
		}));
	};
	onEmailChange = (e) => {
		const email = e.target.value;
		if (this.state.showEmailError && email) {
			this.setState(() => ({
				showEmailError: false,
			}));
		}
		this.setState(() => ({
			email,
		}));
	};
	onSubjectChange = (e) => {
		const subject = e.target.value;
		if (this.state.showSubjectError && subject) {
			this.setState(() => ({
				showSubjectError: false,
			}));
		}
		this.setState(() => ({
			subject,
		}));
	};
	onMessageChange = (e) => {
		const message = e.target.value;
		if (this.state.showMessageError && message) {
			this.setState(() => ({
				showMessageError: false,
			}));
		}
		this.setState(() => ({
			message,
		}));
	};
	render() {
		return (
			<form className='contact-form contact-form-large' onSubmit={this.onSubmit}>
				<div className='contact-form__row'>
					<div className='contact-form__section'>
						<label htmlFor='name'>
							Name
							{this.state.showNameError && (
								<p className='contact-form__error'>Please include your name.</p>
							)}
						</label>

						<input
							name='name'
							type='text'
							value={this.state.name}
							placeholder='Your Name'
							onChange={this.onNameChange}
							autoFocus
						/>
					</div>
					<div className='contact-form__section'>
						<label htmlFor='email'>
							Email
							{this.state.showEmailError && (
								<p className='contact-form__error'>
									Please include a valid email address.
								</p>
							)}
						</label>
						<input
							name='email'
							type='text'
							value={this.state.email}
							placeholder='yourname@email.com'
							onChange={this.onEmailChange}
						/>
					</div>
				</div>

				<div className='contact-form__section'>
					<label htmlFor='subject'>
						Subject
						{this.state.showSubjectError && (
							<p className='contact-form__error'>
								Please include the subject of your message.
							</p>
						)}
					</label>

					<input
						name='subject'
						type='text'
						value={this.state.subject}
						placeholder='Subject of message'
						onChange={this.onSubjectChange}
					/>
				</div>
				<div className='contact-form__section'>
					<label htmlFor='message'>
						Message
						{this.state.showMessageError && (
							<p className='contact-form__error'>Please include your message.</p>
						)}
					</label>

					<textarea
						name='message'
						value={this.state.message}
						placeholder='Your message'
						onChange={this.onMessageChange}
					/>
				</div>
				<button>Submit</button>
			</form>
		);
	}
}
