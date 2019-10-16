import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
Enzyme.configure({ adapter: new Adapter() });

describe("ProtectedRoute component", () => {
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<ProtectedRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
