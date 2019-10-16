import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { App } from "../../App";

Enzyme.configure({ adapter: new Adapter() });

let props;

const spyFunction = jest.fn();

describe("App component", () => {
  beforeEach(() => {
    props = {
      setUserLogIn: spyFunction,
      setJwt: spyFunction,
      setUserEmail: spyFunction
    };
  });
  it("Should match snaptshot", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
