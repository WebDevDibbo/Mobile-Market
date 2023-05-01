import { applyMiddleware, createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(productReducer,composeWithDevTools(applyMiddleware(thunk,logger)));