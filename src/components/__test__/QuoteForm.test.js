import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { QuoteForm } from "../QuoteForm/QuoteForm";
Enzyme.configure({ adapter: new Adapter() });

describe("QuoteForm component", () => {
  let props;
  beforeEach(() => {
    props = {
      touched: {
        quote: "quote",
        quoteAuthor: "author",
        insertAuthor: "insertauthor",
        lang: "lang",
        id: 1,
        userName: "username"
      },
      errors: {
        quote: "",
        quoteAuthor: "",
        insertAuthor: "",
        lang: "lang",
        id: "",
        userName: ""
      }
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<QuoteForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
