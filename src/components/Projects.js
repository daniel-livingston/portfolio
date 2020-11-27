import React from "react";
import useTitle from "../hooks/useTitle";
import Container from "./Container";
import Project from "./Project";

const Projects = () => {
	useTitle("Projects");

	return (
		<div className='projects'>
			<Container>
				<h1>Projects</h1>
			</Container>

			<Project
				image={{ href: "/images/DnD.png", alt: "DnD application viewing the Canvas" }}
				app={{
					link: "https://livingston-dnd.herokuapp.com/",
					github: "https://github.com/daniel-livingston/dnd-app",
				}}
				defaultDisplayed={[
					"This app provides a fun and easy way to play DnD with friends. Users can create accounts, add friends, and create and join rooms to play with others.",
				]}
				toggleDisplayed={[
					"The front end for the app was built entirely in React using Redux and React-Router-Dom. Testing was done with Jest and Enzyme. Styling was done with Sass.",
					"The back end for the app was built using Express. Users are registered and can log in using an API created for the server. The database was implemented with Mongoose, and user authentication is handled with a Local Strategy in Passport.",
					"The app also uses Socket.io to communicate within rooms.",
					"This project was incredibly fun to work on. I know of other applications available that accomplish the same thing, but I just wanted to create my own take on it. This project exposed me to a lot of challenges that I had to overcome. For one, designing the Web Socket API in a way that made sense and was easy to understand was particularly difficuly. Also, I'm not strongly suited towards design, so styling the app and making sure it looked clean on all screen sizes was a challenge as well.",
				]}
				side='left'
			/>
		</div>
	);
};

export default Projects;
