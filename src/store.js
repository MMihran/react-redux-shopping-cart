import { createStore, applyMiddleware } from "redux";
import cartReducer from "./reducers/cartReducer";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

const initialState = {
  products: [],
  productsInCart: []
};

const store = createStore(
  cartReducer,
  initialState,
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
