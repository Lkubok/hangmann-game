import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header } from "../Header/Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
