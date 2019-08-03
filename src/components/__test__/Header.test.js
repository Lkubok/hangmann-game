import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../Header/index";

Enzyme.configure({ adapter: new Adapter() });

describe("Navbar component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
