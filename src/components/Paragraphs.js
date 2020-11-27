import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	content: PropTypes.array.isRequired,
};

export const Paragraphs = (props) => (
	<>
		{props.content.map((paragraph) => (
			<React.Fragment key={paragraph.slice(0, 10)}>
				<div>{paragraph}</div>
				<br />
			</React.Fragment>
		))}
	</>
);

Paragraphs.propTypes = propTypes;

export default Paragraphs;
