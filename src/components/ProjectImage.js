import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	href: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	side: PropTypes.string.isRequired,
};

export const ProjectImage = (props) => (
	<a target='_blank' href={props.href}>
		<img className={`ProjectImage-${props.side}`} src={props.href} alt={props.alt} />
	</a>
);

ProjectImage.propTypes = propTypes;

export default ProjectImage;
