import React from "react";
import useTitle from "../hooks/useTitle";

const NotFound = (props) => {
	useTitle("404");
	return <div>404 - Not Found</div>;
};

export default NotFound;
