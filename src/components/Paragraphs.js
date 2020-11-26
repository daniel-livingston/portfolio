import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	content: PropTypes.array.isRequired,
};

export const Paragraphs = (props) => (
	<>
		{props.content.map((paragraph) => (
			<React.Fragment>
				<div>{paragraph}</div>
				<br />
			</React.Fragment>
		))}
	</>
);

Paragraphs.propTypes = propTypes;

export default Paragraphs;
