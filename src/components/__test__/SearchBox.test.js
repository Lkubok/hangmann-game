import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchBoxAndPageSize } from "../Quotes/SearchBoxAndPageSize/SearchBoxAndPageSize";
Enzyme.configure({ adapter: new Adapter() });

describe("Search Box Component", () => {
  it("Should match snapshot after mount", () => {
    const wrapper = shallow(<SearchBoxAndPageSize />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should trigger change filter query on input change", () => {
    const wrapper = shallow(<SearchBoxAndPageSize />);
    const spyFunction = jest.fn();
    const event = {
      target: {
        value: "value in input",
        name: null
      }
    };
    wrapper.instance().handleChange = spyFunction;
    wrapper.instance().changeFilter = spyFunction;
    wrapper.update();
    wrapper.find("#filterQuery").simulate("change", event);
    expect(spyFunction).toHaveBeenCalled();
  });
});
