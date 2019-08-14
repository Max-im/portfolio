import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import { read_cookie } from "sfcookies";

import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { SET_USER } from "./store/actions/constants";
import { setAuthToken } from "./store/actions/utils";
import { onLogout } from "./store/actions/auth";

try {
  const access_token = read_cookie("max-im");
  const decoded = jwt_decode(access_token);
  if (decoded && decoded.exp) {
    if (decoded.exp * 1000 < Date.now()) store.dispatch(onLogout());
    else {
      store.dispatch({ type: SET_USER, payload: decoded.payload });
      setAuthToken(access_token);
    }
  }
} catch (err) {
  store.dispatch(onLogout());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
