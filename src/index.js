import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
=======

import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import "./input.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
>>>>>>> origin/feature
