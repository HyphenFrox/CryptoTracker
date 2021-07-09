import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { ProgressLoader } from "./components/ProgressLoader";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/js/bootstrap.bundle";
const App = lazy(() => import("./App"))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={ProgressLoader}>
      <Provider store={store}>
        <App></App>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
