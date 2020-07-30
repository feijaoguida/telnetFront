import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Registrar from "../pages/Registrar";
import CadastrarPlano from "../pages/CadastrarPlano";
import ListarPlano from "../pages/ListarPlanos";

import Simular from "../pages/Simulate";

import CadastrarTarifa from "../pages/CadastrarTarifa";
import ListarTarifa from "../pages/ListarTarifa";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} isPrivate />
        <Route path="/login" component={Login} />
        <Route path="/registrar" component={Registrar} />
        <Route path="/cadastrarplano" component={CadastrarPlano} isPrivate />
        <Route path="/planos" component={ListarPlano} isPrivate />
        <Route path="/simular" component={Simular} isPrivate />
        <Route path="/cadastrartarifa" component={CadastrarTarifa} isPrivate />
        <Route path="/tarifas" component={ListarTarifa} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
