import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navbar } from "../Navbar/Navbar";

Enzyme.configure({ adapter: new Adapter() });

describe("Navbar component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should launch handleClick when clicked on link", () => {
    const spyClick = jest.fn();
    const wrapper = shallow(<Navbar />);
    wrapper.instance().handleClick = spyClick;
    wrapper.instance().forceUpdate();
    wrapper
      .find(".nav-item")
      .first()
      .simulate("click");
    expect(spyClick).toHaveBeenCalled();
  });
});
