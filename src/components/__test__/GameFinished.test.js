import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GameFinished } from "../Game/GameInProgress/GameFinished/GameFinished";
Enzyme.configure({ adapter: new Adapter() });

describe("GameFinished component", () => {
  let props;
  const spyFunction = jest.fn();
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
      scoreToSend: "win",
      startTime: 123,
      isFinished: true,
      fetchSingleQuote: spyFunction
    };
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<GameFinished {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
