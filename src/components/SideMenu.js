import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	closeMenu: PropTypes.func.isRequired,
};

const SideMenu = (props) => {
	const onClick = () => {
		props.closeMenu();
	};
	return (
		<div id='side-menu' className='side-menu'>
			<NavLink onClick={onClick} className='navlink' to='/' activeClassName='navlink__active'>
				About
			</NavLink>
			<NavLink
				onClick={onClick}
				className='navlink'
				to='/projects'
				activeClassName='navlink__active'
			>
				Projects
			</NavLink>
			<NavLink
				onClick={onClick}
				className='navlink'
				to='/contact'
				activeClassName='navlink__active'
			>
				Contact
			</NavLink>
		</div>
	);
};

SideMenu.propTypes = propTypes;

export default SideMenu;
