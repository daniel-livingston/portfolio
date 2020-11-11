import React from "react";
import useTitle from "../hooks/useTitle";

const Projects = () => {
	useTitle("Projects");
	return (
		<div className='projects'>
			<div className='feature container'>
				<div className='wrapper'>
					<h1>Projects</h1>
				</div>
			</div>
		</div>
	);
};

export default Projects;
