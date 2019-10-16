import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
Enzyme.configure({ adapter: new Adapter() });

describe("NotFoundPage component", () => {
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
