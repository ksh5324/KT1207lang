import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import themes from "./theme";
import codes from "./code";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...(state as object), ...action.payload };
      default:
        return state;
    }
  },
  themes,
  codes,
});

export default rootReducer;
