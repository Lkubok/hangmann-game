import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Keypad } from "../Game/GameInProgress/Keypad/Keypad";
Enzyme.configure({ adapter: new Adapter() });

describe("KeyPad component", () => {
  let props = {
    guessed: ["a", "b"],
    typed: ["a", "b"],
    gameLang: "pl"
  };
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<Keypad {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
