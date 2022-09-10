import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const routeReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default routeReducer;
