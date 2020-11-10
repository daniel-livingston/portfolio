import React from "react";
import useTitle from "../hooks/useTitle";

const Home = () => {
	useTitle("Home");
	return (
		<div className='home'>
			<div className='home__main-attribute container'>
				<div className='wrapper'>
					<h2 className='home__main-attribute__header'>
						I'm a full stack web developer with experience building applications using
						Node.js and React.
					</h2>
				</div>
			</div>
			<div className='home__attribute container'>
				<div className='wrapper'>
					<h2 className='home__attribute__title attribute__red'>
						Teachable and Inquisitive
					</h2>
					<p className='home__attribute__description'>
						I have a thirst for knowledge. In the months since graduating with a
						master's in computer science focusing on data science, I've used every
						resource I can to teach myself web development, and I will probably never
						stop learning.
					</p>
				</div>
			</div>

			<div className='home__attribute container'>
				<div className='wrapper'>
					<h2 className='home__attribute__title attribute__blue'>
						Communicative and Team-oriented
					</h2>
					<p className='home__attribute__description'>
						I highly value the ability to work well with other people. I have tons of
						experience leading and being led, and I believe, in life, there is no
						greater skill than being able to cooperate with others.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
