import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

import Home from "./components/Home";
import Cadastrar from "./components/Cadastrar";
import Simular from "./components/Simular";

function RoutesNew() {
  return (
    <BrowserRouter>
      <Route path="/Home" exact component={Home} />
      <Route path="/Cadastrar" component={Cadastrar} />
      <Route path="/Simular" component={Simular} />
    </BrowserRouter>
  );
}

export default withRouter(RoutesNew);
