import React from "react";
import Section from "./Section";
import useTitle from "../hooks/useTitle";
import { HOME_SECTIONS } from "../constants";

const Home = () => {
	useTitle("About");
	return (
		<div className='home'>
			<div className='main-feature container'>
				<div className='wrapper'>
					<h2 className='main-feature__header'>
						I'm a full stack web developer with experience building applications using
						<span className='text-accent'> Node.js </span>and{" "}
						<span className='text-accent'> React </span>.
					</h2>
				</div>
			</div>
			{HOME_SECTIONS.map((section, index) => (
				<Section
					title={section.title}
					side={index % 2 === 0 ? "left" : "right"}
					key={section.title}
				>
					{section.description}
				</Section>
			))}
		</div>
	);
};

export default Home;
