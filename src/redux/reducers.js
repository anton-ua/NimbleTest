import { combineReducers } from "redux";

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRACKER":
      return [action.payload, ...state];
    case "PAUSE_TRACKER":
      return state.map((tracker) => {
        if (tracker.id === action.payload.id) {
          tracker.startTime
            ? (tracker.startTime = 0)
            : (tracker.startTime = Date.now());
          tracker.totalTime = action.payload.totalTime;
        }
        return tracker;
      });

    default:
      return state;
  }
};

export default combineReducers({ trackers: rootReducer });
