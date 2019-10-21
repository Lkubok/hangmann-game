import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Header } from "../Header/Header";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("renders todos with coloring", () => {
  const defaultProps = {
    props: {
      isLogged: true,
      userName: "testUser"
    }
  };

  const wrapper = shallow(<Header {...defaultProps} />);
  expect(
    wrapper
      .find(".user")
      .first()
      .text()
  ).toEqual("Logged as: testUser");
});
