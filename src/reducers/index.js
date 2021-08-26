import { combineReducers } from "redux";
import products from "./products";
import provinces from "./provinces";
import alerts from "./alerts";

const appReducers = combineReducers({
  products,
  provinces,
  alerts,
});

export default appReducers;
