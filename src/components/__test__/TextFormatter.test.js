import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TextDisplay } from "../TextDisplay/TextDisplay";
import TextFormatter from "../TextFormatter";
Enzyme.configure({ adapter: new Adapter() });

describe("HoC TextFormatter component", () => {
  it("It should add version prop to TextDisplay component", () => {
    const wrapper = mount(<TextDisplay text="test" />);
    expect(wrapper.props().text).toEqual("test");
  });

  it("Should match snapshot", () => {
    const wrapper = mount(<TextDisplay text="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("It should add version prop to TextDisplay component", () => {
    const TestedComponent = TextFormatter(TextDisplay);
    const wrapper = shallow(<TestedComponent />);
    expect(wrapper.props().version).toEqual(" v_1.0");
  });
  it("should receive text prop", () => {
    const Element = () => <div text="test" />;
    const TestedComponent = TextFormatter(Element);
    const wrapper = shallow(<TestedComponent text={"test"} />);
    wrapper.instance().forceUpdate();
    expect(wrapper.props().text).toEqual("test");
  });
});
