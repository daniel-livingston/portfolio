import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	closeMenu: PropTypes.func.isRequired,
};

const Footer = (props) => (
	<footer className='footer'>
		<nav className='footer__nav'>
			<NavLink
				onClick={props.closeMenu}
				className='footer__navlink footer__navlink__brand'
				to='/'
				exact
			>
				Daniel Livingston
			</NavLink>
			<div className='footer__navlinks'>
				<NavLink className='footer__navlink' to='/' onClick={props.closeMenu}>
					About
				</NavLink>
				<NavLink className='footer__navlink' to='/projects' onClick={props.closeMenu}>
					Projects
				</NavLink>
				<NavLink className='footer__navlink' to='/contact' onClick={props.closeMenu}>
					Contact
				</NavLink>
			</div>
			<div className='footer__social-links'>
				<a href='https://github.com/daniel-livingston' target='_blank'>
					<img
						className='social-icons'
						src='/images/GitHub-Mark-Light-32px.png'
						alt='Link to my GitHub page'
					></img>
				</a>
				<a href='https://www.linkedin.com/in/danieljlivingston/' target='_blank'>
					<img
						className='social-icons'
						src='/images/LI-In-Bug.png'
						alt='Link to my LinkedIn page'
					></img>
				</a>
			</div>
		</nav>
	</footer>
);

Footer.propTypes = propTypes;

export default Footer;
