import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import Projects from "./Projects";
import SideMenu from "./SideMenu";

export default class App extends React.Component {
	state = {
		menuIsOpen: false,
	};
	openMenu = () => {
		this.setState(() => ({
			menuIsOpen: true,
		}));
	};
	closeMenu = () => {
		this.setState(() => ({
			menuIsOpen: false,
		}));
	};
	onWindowClick = (e) => {
		if (
			this.state.menuIsOpen &&
			!document.getElementById("header").contains(e.target) &&
			document.getElementById("side-menu") &&
			!document.getElementById("side-menu").contains(e.target)
		) {
			this.closeMenu();
		}
	};
	componentDidMount() {
		window.addEventListener("click", this.onWindowClick);
	}
	componentWillUnmount() {
		window.removeEventListener("click", this.onWindowClick);
	}
	render() {
		return (
			<BrowserRouter>
				<Header
					closeMenu={this.closeMenu}
					openMenu={this.openMenu}
					menuIsOpen={this.state.menuIsOpen}
				/>
				{this.state.menuIsOpen && <SideMenu closeMenu={this.closeMenu} />}
				<div id='main-content'>
					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/projects'>
							<Projects />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</div>
				<Footer closeMenu={this.closeMenu} />
			</BrowserRouter>
		);
	}
}
