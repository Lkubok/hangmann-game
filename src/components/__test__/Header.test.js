import React from "react";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header } from "../Header/Header";
// import { connect } from "react-redux";
// import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
// import thunk from "redux-thunk";

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
  beforeEach(() => {});
  afterEach(() => {
    fetchMock.restore();
  });
  it("Should match snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  // it("should fully render woth mocked redux store", () => {
  //   const mapStateToProps = state => ({
  //     userName: state.appParamsReducer.userName,
  //     isLogged: state.appParamsReducer.isLogged
  //   });
  //   const wrapper = mount(
  //     connect(
  //       mapStateToProps,
  //       null
  //     )(Header)
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });
  //   it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
  //     fetchMock.getOnce("/todos", {
  //       body: { todos: ["do something"] },
  //       headers: { "content-type": "application/json" }
  //     });

  //     const expectedActions = [
  //       { type: types.FETCH_TODOS_REQUEST },
  //       { type: types.FETCH_TODOS_SUCCESS, body: { todos: ["do something"] } }
  //     ];
  //     const store = mockStore({ todos: [] });

  //     return store.dispatch(actions.fetchTodos()).then(() => {
  //       // return of async actions
  //       expect(store.getActions()).toEqual(expectedActions);
  //     });
  //   });
  // });
  // /////////////
  // export class Header extends Component {
  //   render() {
  //     return (
  //       <header className="app-header">
  //         <img src="./img/logo.png" alt="" />
  //         {this.props.isLogged && (
  //           <h5 className="user">
  //             Logged as: <span>{this.props.userName}</span>
  //           </h5>
  //         )}
  //       </header>
  //     );
  //   }
  // }

  // const mapStateToProps = state => ({
  //   userName: state.appParamsReducer.userName,
  //   isLogged: state.appParamsReducer.isLogged
  // });
  // const store = {
  //   appParamsReducer: {
  //     userName: "testUser",
  //     isLogged: "true"
  //   }
  // };

  // export default connect(
  //   mapStateToProps,
  //   null
});
