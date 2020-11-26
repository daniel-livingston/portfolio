import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
	onClick: PropTypes.func.isRequired,
};

export const HeaderBrand = (props) => (
	<div className='HeaderBrand'>
		<Link onClick={props.onClick} className='HeaderBrand-wrapper' to='/'>
			<div className='HeaderBrand-title'>Daniel Livingston</div>
			<div className='HeaderBrand-description'>Web Developer</div>
		</Link>
	</div>
);

HeaderBrand.propTypes = propTypes;

export default HeaderBrand;
