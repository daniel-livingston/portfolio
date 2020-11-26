import React from "react";
import PropTypes from "prop-types";
import Container from "./Container";

const propTypes = {
	side: PropTypes.oneOf(["left", "right"]).isRequired,
	title: PropTypes.string.isRequired,
};

export const Section = (props) => {
	const getClassName = () => `Section-title Section-${props.side}`;

	return (
		<Container>
			<h2 className={getClassName()}>{props.title}</h2>
			<div className='Section-description'>{props.children}</div>
		</Container>
	);
};

Section.propTypes = propTypes;

export default Section;
