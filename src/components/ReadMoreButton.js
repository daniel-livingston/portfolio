import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	isToggled: PropTypes.bool.isRequired,
	handleToggle: PropTypes.func.isRequired,
};

const ReadMoreButton = (props) => (
	<div>
		{props.isToggled ? (
			<button className='read-more' onClick={props.handleToggle}>
				Read less{" "}
				<svg
					viewBox='0 0 16 16'
					className='read-more__arrow'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z'
					/>
				</svg>
			</button>
		) : (
			<button className='read-more' onClick={props.handleToggle}>
				Read more{" "}
				<svg
					className='read-more__arrow'
					viewBox='0 0 16 16'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z'
					/>
				</svg>
			</button>
		)}
	</div>
);

ReadMoreButton.propTypes = propTypes;

export default ReadMoreButton;
