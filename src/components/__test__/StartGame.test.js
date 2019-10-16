import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StartGame } from "../Game/StartGame/StartGame";
Enzyme.configure({ adapter: new Adapter() });

describe("StartGame component", () => {
  let props;
  beforeEach(() => {
    props = {
      username: "test",
      email: "test",
      lang: "test",
      level: "test",
      getUserName: "test",
      getUserEmail: "test",
      getUserLang: "test",
      getUserLevel: "test",
      isLogged: "test",
      AppUserEmail: "test",
      AppUserName: "test",
      touched: {
        username: "test",
        email: "test",
        lang: "test",
        level: "test"
      },
      errors: {
        username: "test",
        email: "test",
        lang: "test",
        level: "test"
      }
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<StartGame {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
