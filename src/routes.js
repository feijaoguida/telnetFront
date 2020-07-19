import React from "react";
import { Switch, Route } from "react-router";

import Home from "./components/Home";
import Login from "./pages/Login";
import Cadastrar from "./components/Cadastrar";
import Simular from "./components/Simular";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Cadastrar" component={Cadastrar} />
      <Route path="/Simular" component={Simular} />
      <Route path="/Login" component={Login} />
    </Switch>
  );
}
