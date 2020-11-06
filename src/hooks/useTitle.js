import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `Daniel Livingston | ${title}`;
	});
};

export default useTitle;
