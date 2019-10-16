import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GameSending } from "../Game/GameInProgress/GameFinished/GameSending/GameSending";
Enzyme.configure({ adapter: new Adapter() });

describe("GameSending component", () => {
  let props;
  const spyFunction = jest.fn();
  beforeEach(() => {
    props = {
      fetchSingleQuote: spyFunction,
      sendGameStat: spyFunction,
      scoreToSend: "win",
      gameId: "123",
      startTime: 123
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<GameSending {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
