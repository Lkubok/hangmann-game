import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Stats } from "../Stats/Stats";
Enzyme.configure({ adapter: new Adapter() });

describe("Stats component", () => {
  let props;
  const spyFunction = jest.fn();
  beforeEach(() => {
    props = {
      setRequesting: spyFunction
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<Stats {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
