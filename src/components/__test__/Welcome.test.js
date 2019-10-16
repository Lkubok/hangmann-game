import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Welcome } from "../Welcome/Welcome";
Enzyme.configure({ adapter: new Adapter() });

describe("Welcome component", () => {
  beforeEach(() => {});
  it("Should match snaptshot", () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).toMatchSnapshot();
  });
});
