import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const propTypes = {
	onClick: PropTypes.func.isRequired,
};

export const MenuButton = (props) => (
	<Button {...props} className='MenuButton'>
		<svg className='menu-button__icon' viewBox='0 0 100 80' width='24' height='24'>
			<rect width='100' height='20'></rect>
			<rect y='30' width='100' height='20'></rect>
			<rect y='60' width='100' height='20'></rect>
		</svg>
	</Button>
);

MenuButton.propTypes = propTypes;

export default MenuButton;
