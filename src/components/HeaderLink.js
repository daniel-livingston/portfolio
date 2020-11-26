import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	to: PropTypes.oneOf(["/", "/projects", "/contact"]),
};

export const HeaderLink = (props) => (
	<NavLink className='Header-navlink' to={props.to} activeClassName='Header-navlink-active' exact>
		{props.children}
	</NavLink>
);

HeaderLink.propTypes = propTypes;

export default HeaderLink;
