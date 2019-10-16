import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AddQuote } from "../AddQuote/AddQuote";
Enzyme.configure({ adapter: new Adapter() });

describe("AddQuote component", () => {
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<AddQuote />);
    expect(wrapper).toMatchSnapshot();
  });
});
