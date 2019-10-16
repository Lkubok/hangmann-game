import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GameSending } from "../Game/GameInProgress/GameFinished/GameSending/GameSending";
Enzyme.configure({ adapter: new Adapter() });

describe("GameSending component", () => {
  let props;
  const spyFunctionFetch = jest.fn();
  const spyFunctionSendGame = jest.fn();
  beforeEach(() => {
    props = {
      fetchSingleQuote: spyFunctionFetch,
      sendGameStat: spyFunctionSendGame,
      scoreToSend: "win",
      gameId: "123",
      startTime: 123
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<GameSending {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should fetch single quote on mount", () => {
    const wrapper = shallow(<GameSending {...props} />);
    expect(spyFunctionFetch).toHaveBeenCalled();
  });
  it("Should send game stats after game", () => {
    const wrapper = shallow(<GameSending {...props} />);
    expect(spyFunctionSendGame).toHaveBeenCalled();
  });
});
