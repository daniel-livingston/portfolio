import React from "react";
import PropTypes from "prop-types";
import ReadMoreButton from "./ReadMoreButton";

const propTypes = {
	left: PropTypes.bool,
	image: PropTypes.exact({
		href: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}),
	app: PropTypes.exact({
		link: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
	}),
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
		const featureSideClassName = this.props.left
			? "feature__title feature__left"
			: "feature__title feature__right";
		const imageClassName = this.props.left
			? "feature__img shadow image-right"
			: "feature__img shadow image-left";

		return (
			<div className='feature container'>
				<div className='wrapper'>
					<h2 className={featureSideClassName}>DnD App</h2>
					<div className='feature__description'>
						{this.props.image && (
							<a target='_blank' href={this.props.image.href}>
								<img
									className={imageClassName}
									src={this.props.image.href}
									alt={this.props.image.alt}
								/>
							</a>
						)}

						<div className='feature__content'>
							{this.props.defaultDisplayed.map((paragraph) => (
								<div key={paragraph.slice(0, 10)}>
									<p>{paragraph}</p>
									<br />
								</div>
							))}

							{this.state.isToggled && (
								<div>
									{this.props.toggleDisplayed.map((paragraph) => (
										<div key={paragraph.slice(0, 10)}>
											<p>{paragraph}</p>
											<br />
										</div>
									))}
								</div>
							)}

							<ReadMoreButton
								isToggled={this.state.isToggled}
								handleToggle={this.handleToggle}
							/>

							<div className='button-container'>
								<a className='button' target='_blank' href={this.props.app.link}>
									View app
								</a>
								<a className='button' target='_blank' href={this.props.app.github}>
									Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Project.propTypes = propTypes;

export default Project;
