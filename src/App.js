import React from "react";
import Routes from "./routes/index";

import history from "./services/history";

import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <>
      <Routes history={history} />
      <GlobalStyle />
    </>
  );
}
