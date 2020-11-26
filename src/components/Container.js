import React from "react";

export const Container = (props) => {
	const getClassName = () => (props.className ? `${props.className} container` : "container");
	return (
		<div className={getClassName()}>
			<div className='wrapper'>{props.children}</div>
		</div>
	);
};

export default Container;
