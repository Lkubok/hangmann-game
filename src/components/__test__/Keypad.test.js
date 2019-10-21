import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Keypad } from "../Game/GameInProgress/Keypad/Keypad";
Enzyme.configure({ adapter: new Adapter() });

describe("KeyPad component", () => {
  const spyRemoveListener = jest.fn();
  let props = {
    guessed: ["a", "b"],
    typed: ["a", "b"],
    gameLang: "pl"
  };
  let newProps = {
    guessed: ["a", "b", "c"],
    typed: ["a", "b", "c", "d"],
    gameLang: "pl"
  };
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<Keypad {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should Update when recevied new Props", () => {
    const wrapper = shallow(<Keypad {...props} />);
    expect(wrapper.instance().shouldComponentUpdate(props, newProps)).toEqual(
      true
    );
  });
  it("Should NOT update when recevied the same Props", () => {
    const wrapper = shallow(<Keypad {...props} />);
    expect(wrapper.instance().shouldComponentUpdate(props, props)).toEqual(
      false
    );
  });

  it("Should remove keydown event listener od ComponentWillUnmount", () => {
    const wrapper = shallow(<Keypad {...props} />);
    wrapper.instance().removeListener = spyRemoveListener;
    wrapper.instance().forceUpdate();
    wrapper.unmount();
    expect(spyRemoveListener).toHaveBeenCalled();
  });
});
