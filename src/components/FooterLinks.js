import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	onClick: PropTypes.func.isRequired,
};

export const FooterLinks = (props) => (
	<div className='FooterLinks'>
		<NavLink className='FooterLinks-link' to='/' onClick={props.closeMenu}>
			About
		</NavLink>
		<NavLink className='FooterLinks-link' to='/projects' onClick={props.closeMenu}>
			Projects
		</NavLink>
		<NavLink className='FooterLinks-link' to='/contact' onClick={props.closeMenu}>
			Contact
		</NavLink>
	</div>
);

FooterLinks.propTypes = propTypes;

export default FooterLinks;
