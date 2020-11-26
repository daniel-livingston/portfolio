import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	link: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
};

export const ProjectLinks = (props) => (
	<div className='ProjectLinks'>
		<a className='button' target='_blank' href={props.link}>
			View app
		</a>
		<a className='button' target='_blank' href={props.github}>
			Github
		</a>
	</div>
);

ProjectLinks.propTypes = propTypes;

export default ProjectLinks;
