import quotesReducer from "../../reducers/quotesReducer";
import * as types from "../../types/quotesTypes";

describe("quotes reducer", () => {
  it("should return initial state", () => {
    expect(quotesReducer(undefined, {})).toEqual({
      quotes: [],
      sortedQuotes: [],
      sortBy: "dateInsert",
      sortOrder: "ASC",
      filterBy: "",
      filterQuery: "",
      pageLimit: 10,
      actualPage: 0
    });
  });
  it("should handle change actual page when CHANGE_ACTUAL_PAGE action is dispatched", () => {
    expect(
      quotesReducer([], {
        type: types.CHANGE_ACTUAL_PAGE,
        actualPage: 4
      })
    ).toEqual({
      actualPage: 4
    });
  });

  // should load quotes on startup

  // export const loadQuotes = quotes => ({
  //     type: types.LOAD_QUOTES,
  //     quotes
});
