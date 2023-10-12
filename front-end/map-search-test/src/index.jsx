import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducer/index.js";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const store = createStore(allReducers, applyMiddleware(thunk));
document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
