import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ButtonBox } from "../Quotes/ButtonBox/ButtonBox";
Enzyme.configure({ adapter: new Adapter() });

describe("ButtonBox component", () => {
  let props;
  const spyFunction = jest.fn();
  beforeEach(() => {
    props = {
      canDelete: true,
      id: "123",
      token: "123token",
      deleteQuote: spyFunction
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<ButtonBox {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should launch handleDelte when clicking Delete Button", () => {
    const wrapper = shallow(<ButtonBox {...props} />);
    wrapper.find(".btn-danger").simulate("click");
    expect(spyFunction).toHaveBeenCalled();
  });
  xit("Delete function should be called with 2 args", () => {
    const wrapper = shallow(<ButtonBox {...props} />);
    wrapper.find(".btn-danger").simulate("click");
    expect(spyFunction).toHaveBeenCalledWith(
      "http://localhost:3001/api",
      "123",
      "123token"
    );
  });
  it("Shouldn't allow to launch handleDelete when have no auth", () => {
    const spyFunction = jest.fn();
    let propsNonDelete = {
      canDelete: false,
      id: "123",
      token: "123token",
      deleteQuote: spyFunction
    };
    const wrapper = shallow(<ButtonBox {...propsNonDelete} />);
    wrapper.find(".btn-disabled").simulate("click");
    expect(spyFunction).not.toHaveBeenCalled();
  });
});
