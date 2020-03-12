import React from "react";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainComponent from "../MainComponent/MainComponent";
Enzyme.configure({ adapter: new Adapter() });

let props;

describe("Search Box Component", () => {
  const spyFunction = jest.fn();
  beforeEach(() => {
    props = {
      filterQuery: null,
      pageSize: null,
      quotes: null,
      changeFilter: spyFunction,
      changeSortedQuotes: spyFunction,
      changePageSize: spyFunction
    };
  });

  it("Should match snapshot after mount", () => {
    const wrapper = mount(<MainComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should display proper coordinates (30)", () => {
    const wrapper = mount(<MainComponent {...props} />);
    const spyFunction = jest.fn();
    const event = {
      clientX: 30,
      clientY: 30
    };
    wrapper.instance().handleChange = spyFunction;
    wrapper.instance().forceUpdate();
    wrapper.find("#test").simulate("mouseMove", event);
    expect(wrapper.text()).toEqual("Coordinates: (30, 30)");
  });

  it("should display proper coordinates (40)", () => {
    const wrapper = mount(<MainComponent {...props} />);
    const spyFunction = jest.fn();
    const event = {
      clientX: 40,
      clientY: 40
    };
    wrapper.instance().handleChange = spyFunction;
    wrapper.instance().forceUpdate();
    wrapper.find("#test").simulate("mouseMove", event);
    expect(wrapper.text()).toEqual("Coordinates: (40, 40)");
  });
});
