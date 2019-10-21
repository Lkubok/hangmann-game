import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GameFinished } from "../Game/GameInProgress/GameFinished/GameFinished";
Enzyme.configure({ adapter: new Adapter() });

describe("GameFinished component", () => {
  let props;
  const spyFunctionFetch = jest.fn();
  const spyFunctionClearGame = jest.fn();
  beforeEach(() => {
    props = {
      userName: "lucas",
      userEmail: "aa@wp.pl",
      userLevel: "easy",
      userLang: "pl",
      isGuessed: false,
      gameStatus: "win",
      gameId: "123",
      searchedQuote: "test quote",
      scoreToSend: {},
      startTime: 123,
      isFinished: true,
      fetchSingleQuote: spyFunctionFetch,
      clearGameParams: spyFunctionClearGame
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<GameFinished {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should launch new game when restart button was clicked", () => {
    const spyFunctionLaunch = jest.fn();
    const wrapper = shallow(<GameFinished {...props} />);
    wrapper.instance().handlePlayAgain = spyFunctionLaunch;
    wrapper.instance().forceUpdate();
    wrapper.find(".btn-restart").simulate("click");
    expect(spyFunctionLaunch).toHaveBeenCalled();
  });
  it("Should fetch quote when game is finished to show the quote to user", () => {
    const wrapper = shallow(<GameFinished {...props} />);
    expect(spyFunctionFetch).toHaveBeenCalled();
  });
});
