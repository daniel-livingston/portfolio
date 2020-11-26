import React from "react";
import PropTypes from "prop-types";
import Paragraphs from "./Paragraphs";
import ProjectImage from "./ProjectImage";
import ProjectLinks from "./ProjectLinks";
import ReadMoreButton from "./ReadMoreButton";
import Section from "./Section";

const propTypes = {
	image: PropTypes.exact({
		href: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}),
	app: PropTypes.exact({
		link: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
	}),
	side: PropTypes.oneOf(["left", "right"]),
	defaultDisplayed: PropTypes.array.isRequired,
	toggleDisplayed: PropTypes.array.isRequired,
};

class Project extends React.Component {
	state = {
		isToggled: false,
	};
	handleToggle = () => {
		this.setState((state) => ({
			isToggled: !state.isToggled,
		}));
	};
	render() {
		return (
			<Section title='DnD App' side={this.props.side}>
				{this.props.image && (
					<ProjectImage
						{...this.props.image}
						side={this.props.side === "left" ? "right" : "left"}
					/>
				)}

				<Paragraphs content={this.props.defaultDisplayed} />
				{this.state.isToggled && <Paragraphs content={this.props.toggleDisplayed} />}

				<ReadMoreButton isToggled={this.state.isToggled} handleToggle={this.handleToggle} />

				<ProjectLinks {...this.props.app} />
			</Section>
		);
	}
}

Project.propTypes = propTypes;

export default Project;
