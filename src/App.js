import React, { lazy } from "react";
import "./styles/app.scss"
const Header = lazy(() => import("./components/Header"))
const CoinList = lazy(() => import("./components/CoinList"))

function App() {
  return (
    <div className="app">
      <Header></Header>
      <CoinList></CoinList>
    </div>
  );
}

export default App;
