import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

const propTypes = {
	closeMenu: PropTypes.func.isRequired,
};

const Footer = (props) => (
	<footer className='Footer'>
		<nav className='Footer-nav'>
			<NavLink onClick={props.closeMenu} className='Footer-brand' to='/' exact>
				Daniel Livingston
			</NavLink>
			<FooterLinks onClick={props.closeMenu} />
			<FooterSocial />
		</nav>
	</footer>
);

Footer.propTypes = propTypes;

export default Footer;
