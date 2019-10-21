import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { App } from "../../App";

import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { changeActualPage } from "../../actions/quoteActions";

import { Provider } from "react-redux";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

let props;

const spyFunction = jest.fn();

describe("App component", () => {
  beforeEach(() => {
    props = {
      setUserLogIn: spyFunction,
      setJwt: spyFunction,
      setUserEmail: spyFunction
    };
  });
  it("Should match snaptshot", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should change actual page on pagination component", () => {
    const initialstate = {};
    const testPage = 5;
    const store = mockStore(initialstate);
    store.dispatch(changeActualPage(testPage));
    const actions = store.getActions();
    const expectedPayload = { type: "CHANGE_ACTUAL_PAGE", actualPage: 5 };
    expect(actions).toEqual([expectedPayload]);
  });
  it("It should fully mount with redux mocked store", () => {
    const initialstate = {
      appParamsReducer: {
        userName: "testUser",
        isLogged: true
      }
    };
    const store = mockStore(initialstate);

    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
