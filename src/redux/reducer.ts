import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import auth from "./auth/action-reducer";
import sessions from "./sessions/action-reducer";
import inbox from "./inbox/action-reducer";

const combinedReducer = combineReducers({
  auth,
  sessions,
  inbox
});

const reducers = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducer(state, action);
  }
};
export default reducers;
