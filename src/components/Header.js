import React from "react";
import PropTypes from "prop-types";
import HeaderBrand from "./HeaderBrand";
import HeaderLink from "./HeaderLink";
import MenuButton from "./MenuButton";

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
		<header id='Header' className='Header'>
			<HeaderBrand onClick={onLinkClick} />
			<nav className='Header-nav'>
				<HeaderLink to='/'>About</HeaderLink>
				<HeaderLink to='/projects'>Projects</HeaderLink>
				<HeaderLink to='/contact'>Contact</HeaderLink>
			</nav>
			<MenuButton onClick={onMenuClick} />
		</header>
	);
};

Header.propTypes = propTypes;

export default Header;
