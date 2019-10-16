import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Tiles } from "../Game/GameInProgress/Tiles/Tiles";
Enzyme.configure({ adapter: new Adapter() });

describe("Tiles component", () => {
  let props;
  beforeEach(() => {
    props = {
      lettersToGuess: ["a", "b"]
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<Tiles {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
