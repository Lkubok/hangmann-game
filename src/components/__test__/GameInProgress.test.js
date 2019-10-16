import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GameInProgress } from "../Game/GameInProgress/GameInProgress";
Enzyme.configure({ adapter: new Adapter() });

describe("GameInProgress component", () => {
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = shallow(<GameInProgress />);
    expect(wrapper).toMatchSnapshot();
  });
});
