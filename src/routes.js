import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CadastrarPlano from "./pages/CadastrarPlano";
import Simular from "./pages/Simular";
import ListarPlano from "./pages/ListarPlanos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastrarplano" component={CadastrarPlano} />
        <Route path="/simular" component={Simular} />
        <Route path="/planos" component={ListarPlano} />
      </Switch>
    </BrowserRouter>
  );
}
