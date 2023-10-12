import getSearchValueReducer from "./getSearchValue";
import currentLocation from "./currentLocation";
import displayModal from "./displayModal";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  searchValue: getSearchValueReducer,
  currentLocation: currentLocation,
  displayModal: displayModal,
});

export default allReducers;
