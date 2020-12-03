import { combineReducers } from "redux";

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRACKER":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default combineReducers({ trackers: rootReducer });
