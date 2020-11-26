import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export const Button = (props) => (
	<button className={`Button ${props.className || " "}`} onClick={props.onClick}>
		{props.children}
	</button>
);

Button.propTypes = propTypes;

export default Button;
