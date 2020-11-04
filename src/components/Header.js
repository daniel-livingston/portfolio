import React from "react";
import { NavLink } from "react-router-dom";
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
			<nav className='header__nav'>
				<NavLink
					onClick={onLinkClick}
					className='header__navlink header__navlink__brand'
					to='/'
					exact
				>
					Daniel Livingston
				</NavLink>
				<div class='header__navlinks'>
					<NavLink
						className='header__navlink'
						to='/about'
						activeClassName='header__navlink__active'
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
				<button className='menu-button' onClick={onMenuClick}>
					<svg className='menu-button__icon' viewBox='0 0 100 80' width='24' height='24'>
						<rect width='100' height='20'></rect>
						<rect y='30' width='100' height='20'></rect>
						<rect y='60' width='100' height='20'></rect>
					</svg>
				</button>
			</nav>
		</header>
	);
};

Header.propTypes = propTypes;

export default Header;
