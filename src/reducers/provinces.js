import * as Types from "../constants/ActionTypes";

var initialState = [];

const provinces = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PROVINCES:
      state = action.provinces;
      return [...state];
    default:
      return [...state];
  }
};

export default provinces;
