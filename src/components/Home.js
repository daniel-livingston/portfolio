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
						<span className='text-accent'> Node.js </span>and{" "}
						<span className='text-accent'> React </span>.
					</h2>
				</div>
			</div>
			<div className='home__attribute container'>
				<div className='wrapper'>
					<h2 className='home__attribute__title attribute__one'>Front End Development</h2>
					<p className='home__attribute__description'>
						I have solid fundamentals, with in-depth knowledge of HTML5 and CSS3. I also
						have knowledge of front end frameworks like React (this website is built
						completely with React). I also have experience utilizing many of the
						libraries that play well with React, like Redux, React-Router and Jest.
					</p>
				</div>
			</div>

			<div className='home__attribute container'>
				<div className='wrapper'>
					<h2 className='home__attribute__title attribute__two'>Back End Development</h2>
					<p className='home__attribute__description'>
						I have a solid knowledge of the fundamentals of back end development. I have
						experience building out servers using Express, Passport, and MongoDB, as
						well as designing and building HTTP-based APIs.
					</p>
				</div>
			</div>
			<div className='home__attribute container'>
				<div className='wrapper'>
					<h2 className='home__attribute__title attribute__one'>
						Teachable and Inquisitive
					</h2>
					<p className='home__attribute__description'>
						I have a thirst for knowledge. In the months since graduating with a
						master's in computer science focusing on data science, I've used every
						resource I can to teach myself web development. I'm still learning, and I
						will probably never stop.
					</p>
				</div>
			</div>

			<div className='home__attribute container'>
				<div className='wrapper'>
					<h2 className='home__attribute__title attribute__two'>
						Communicative and Team-oriented
					</h2>
					<p className='home__attribute__description'>
						I highly value the ability to work well with other people. I have tons of
						experience leading and being led, and I believe, in life, there is no
						greater skill than being able to cooperate with others.
					</p>
				</div>
			</div>

			<div className='home__attribute container'>
				<div className='wrapper'>
					<h2 className='home__attribute__title attribute__one'>Self-starter</h2>
					<p className='home__attribute__description'>
						Proactivity is important in all facets of life. Often people will let
						difficult situations stop them from progressing. I try my best to continue
						pushing through that difficulty and succeed anyway.
					</p>
				</div>
			</div>

			<div className='home__attribute container'>
				<div className='wrapper'>
					<h2 className='home__attribute__title attribute__two'>Education</h2>
					<p className='home__attribute__description'>
						I graduated from Florida Atlantic University in 2020 with a{" "}
						<span className='text-accent'> master's in computer science</span>, and
						before that with a{" "}
						<span className='text-accent'> bachelor's in mathematics</span>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
