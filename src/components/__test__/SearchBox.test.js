import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchBoxAndPageSize } from "../Quotes/SearchBoxAndPageSize/SearchBoxAndPageSize";
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
    const wrapper = shallow(<SearchBoxAndPageSize />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should trigger change filter function after input change", () => {
    const wrapper = shallow(<SearchBoxAndPageSize />);
    const spyFunction = jest.fn();
    const event = {
      target: {
        value: "value in input",
        name: null
      }
    };
    wrapper.instance().handleChange = spyFunction;
    wrapper.instance().forceUpdate();
    wrapper.find("#filterQuery").simulate("change", event);
    expect(spyFunction).toHaveBeenCalled();
  });
  it("Should trigger change pageSize after selecting size", () => {
    const wrapper = shallow(<SearchBoxAndPageSize {...props} />);
    const event = {
      target: {
        value: "2",
        name: "pageSize"
      }
    };
    wrapper.find(".quote-page-size").simulate("change", event);
    expect(spyFunction).toHaveBeenCalled();
  });
});
