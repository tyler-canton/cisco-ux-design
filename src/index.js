// NPM Modules
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { Router } from "react-router-dom";

import { store } from "./store";
import { history } from "./helper";

// Styles
import "./css/main.css";

// High Order Components
import Main from "./layouts/Main";
import Toolbar from "./layouts/Toolbar";
import { Aux } from "./hocs/Aux";

const App = () => (
  <Aux name="main-content">
    <Toolbar />
    <Main />
  </Aux>
);

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
