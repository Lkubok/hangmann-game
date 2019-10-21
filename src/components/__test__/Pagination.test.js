import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Pagination } from "../Quotes/Pagination/Pagination";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { changeActualPage } from "../../actions/quoteActions";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe("Pagination component", () => {
  beforeEach(() => {});
  it("Should match snapshot", () => {
    const wrapper = mount(<Pagination />);
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
});
