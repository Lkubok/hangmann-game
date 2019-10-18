import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SignForm } from "../User/SignUp/SignUp";
Enzyme.configure({ adapter: new Adapter() });

describe("SignUp component", () => {
  let props = {
    touched: {
      firstname: "test",
      lastname: "test",
      username: "test",
      password: "test",
      passwordVerification: "123",
      email: "test",
      age: "test"
    },
    errors: {
      firstname: "test",
      lastname: "test",
      username: "test",
      password: "test",
      passwordVerification: "123",
      email: "test",
      age: "test"
    }
  };
  const spyMountFunction = jest.fn();
  beforeEach(() => {});
  // it("Should match snapshot", () => {
  //   const wrapper = shallow(<SignForm {...props} />);
  //   wrapper.instance().componentDidMount = spyMountFunction;
  //   wrapper.instance().forceUpdate();
  //   expect(wrapper).toMatchSnapshot();
  // });
});
