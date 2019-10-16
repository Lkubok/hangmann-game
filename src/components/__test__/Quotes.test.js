import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Quotes } from "../Quotes/Quotes";
Enzyme.configure({ adapter: new Adapter() });

describe("Quotes component", () => {
  let props;
  beforeEach(() => {
    props = {
      quotes: ["a", "b"],
      sortedQuotes: ["b", "c"],
      actualPage: 1,
      pageLimit: 5
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<Quotes {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
