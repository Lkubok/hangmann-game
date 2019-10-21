import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Header } from "../Header/Header";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("renders todos with coloring", () => {
  let props;
  beforeEach(() => {
    props = {
      isLogged: true,
      userName: "testUser"
    };
  });
  it("Should render username", () => {
    const wrapper = shallow(<Header {...props} />);
    expect(
      wrapper
        .find(".user")
        .first()
        .text()
    ).toEqual("Logged as: testUser");
  });
});
