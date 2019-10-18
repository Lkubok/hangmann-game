import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SignForm } from "../User/SignForm/SignForm";
Enzyme.configure({ adapter: new Adapter() });

describe("SignForm component", () => {
  let props;
  beforeEach(() => {
    props = {
      touched: {
        username: "test",
        password: "test"
      },
      errors: {
        username: "test",
        password: "test"
      }
    };
  });
  // it("Should match snapshot", () => {
  //   const wrapper = shallow(<SignForm {...props} />);
  //   expect(wrapper).toMatchSnapshot();
  // });
});
