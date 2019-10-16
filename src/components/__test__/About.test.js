import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { About } from "../About/About";
Enzyme.configure({ adapter: new Adapter() });

describe("About component", () => {
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Tech section should contain only 5 positions", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(".about-section-inline a").length).toEqual(5);
  });
});
