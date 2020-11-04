import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
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
							<div>Home</div>
						</Route>
						<Route path='/about'>
							<div>About</div>
						</Route>
						<Route path='/projects'>
							<div>Projects</div>
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route>
							<div>404</div>
						</Route>
					</Switch>
				</div>
				<Footer closeMenu={this.closeMenu} />
			</BrowserRouter>
		);
	}
}
