import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const routeReducer = combineReducers({
  games: gamesReducer,
});

export default routeReducer;
