import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { EditQuote } from "../EditQuote/EditQuote";
Enzyme.configure({ adapter: new Adapter() });

describe("EditQuote component", () => {
  let props;
  const spyFunctionMount = jest.fn();
  beforeEach(() => {
    props = {
      match: {
        params: {
          quoteId: "123"
        }
      },
      fetchQuote: spyFunctionMount
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<EditQuote {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should start fetching new quote on componentDidMount", () => {
    const wrapper = shallow(<EditQuote {...props} />);
    expect(spyFunctionMount).toHaveBeenCalled();
  });
});
