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
			<div class='footer__navlinks'>
				<NavLink
					className='footer__navlink'
					to='/about'
					onClick={props.closeMenu}
					activeClassName='footer__navlink__active'
				>
					About
				</NavLink>
				<NavLink
					className='footer__navlink'
					to='/projects'
					onClick={props.closeMenu}
					activeClassName='footer__navlink__active'
				>
					Projects
				</NavLink>
				<NavLink
					className='footer__navlink'
					to='/contact'
					onClick={props.closeMenu}
					activeClassName='footer__navlink__active'
				>
					Contact
				</NavLink>
			</div>
			<div class='footer__social-links'>
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
