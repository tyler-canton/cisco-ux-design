import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

export const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(),
    applyMiddleware(thunkMiddleware)
  )
);
