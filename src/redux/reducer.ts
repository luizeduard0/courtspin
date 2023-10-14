import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import auth from "./auth/action-reducer";

const combinedReducer = combineReducers({
  auth
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
