import React from "react";
import Container from "./Container";
import Section from "./Section";
import useTitle from "../hooks/useTitle";
import { HOME_SECTIONS } from "../constants";

const Home = () => {
	useTitle("About");
	return (
		<>
			<Container className='Home-header'>
				<h2>
					I'm a full stack web developer with experience building applications using
					<span className='text-accent'> Node.js </span>and{" "}
					<span className='text-accent'> React </span>.
				</h2>
			</Container>

			{HOME_SECTIONS.map((section, index) => (
				<Section
					title={section.title}
					side={index % 2 === 0 ? "left" : "right"}
					key={section.title}
				>
					{section.description}
				</Section>
			))}
		</>
	);
};

export default Home;
