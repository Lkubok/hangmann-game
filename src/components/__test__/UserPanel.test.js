import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { UserPanel } from "../UserPanel/UserPanel";
Enzyme.configure({ adapter: new Adapter() });

describe("UserPanel component", () => {
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<UserPanel />);
    expect(wrapper).toMatchSnapshot();
  });
});
