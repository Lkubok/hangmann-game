import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Loaded } from "../EditQuote/Loaded/Loaded";
Enzyme.configure({ adapter: new Adapter() });

describe("Loaded component", () => {
  let props;
  beforeEach(() => {
    props = {
      fetchedQuote: {
        quote: "test",
        quoteAuthor: "test",
        insertAuthor: "test",
        lang: "test"
      }
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<Loaded {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
