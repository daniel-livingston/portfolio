import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	menuIsOpen: PropTypes.bool.isRequired,
	openMenu: PropTypes.func.isRequired,
	closeMenu: PropTypes.func.isRequired,
};

const Header = (props) => {
	const onMenuClick = () => {
		if (props.menuIsOpen) {
			props.closeMenu();
		} else {
			props.openMenu();
		}
	};

	const onLinkClick = () => {
		props.closeMenu();
	};

	return (
		<header id='header' className='header'>
			<div className='header__brand'>
				<div className='header__brand__wrapper'>
					<div className='header__brand__title'>Daniel Livingston</div>
					<div className='header__brand__description'>Web Developer</div>
				</div>
			</div>
			<nav className='header__nav'>
				<div className='header__navlinks'>
					<NavLink
						className='header__navlink'
						to='/'
						activeClassName='header__navlink__active'
						exact
					>
						About
					</NavLink>
					<NavLink
						className='header__navlink'
						to='/projects'
						activeClassName='header__navlink__active'
					>
						Projects
					</NavLink>
					<NavLink
						className='header__navlink'
						to='/contact'
						activeClassName='header__navlink__active'
					>
						Contact
					</NavLink>
				</div>
			</nav>
			<button className='menu-button' onClick={onMenuClick}>
				<svg className='menu-button__icon' viewBox='0 0 100 80' width='24' height='24'>
					<rect width='100' height='20'></rect>
					<rect y='30' width='100' height='20'></rect>
					<rect y='60' width='100' height='20'></rect>
				</svg>
			</button>
		</header>
	);
};

Header.propTypes = propTypes;

export default Header;
