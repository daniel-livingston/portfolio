import React from "react";
import { mount, shallow } from "enzyme";
import { NavLink, MemoryRouter } from "react-router-dom";
import SideMenu from "../../../src/components/SideMenu";

let closeMenu;

beforeEach(() => {
	closeMenu = jest.fn();
});

describe("<SideMenu />", () => {
	test("renders snapshot correctly with 3 NavLink components", () => {
		const wrapper = shallow(<SideMenu closeMenu={closeMenu} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find(NavLink)).toHaveLength(3);
	});

	test("clicking NavLink closes menu", () => {
		const wrapper = mount(
			<MemoryRouter>
				<SideMenu closeMenu={closeMenu} />
			</MemoryRouter>
		);

		wrapper.find(NavLink).at(0).simulate("click");
		expect(closeMenu).toHaveBeenCalledTimes(1);
		wrapper.find(NavLink).at(1).simulate("click");
		expect(closeMenu).toHaveBeenCalledTimes(2);
		wrapper.find(NavLink).at(2).simulate("click");
		expect(closeMenu).toHaveBeenCalledTimes(3);
	});
});
