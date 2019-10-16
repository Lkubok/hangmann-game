import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ButtonBox } from "../Quotes/ButtonBox/ButtonBox";
Enzyme.configure({ adapter: new Adapter() });

describe("ButtonBox component", () => {
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<ButtonBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
