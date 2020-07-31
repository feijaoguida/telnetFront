import React from "react";

import * as s from "./styles";

import imgLogo from "../../assets/rocket_launch.svg";

import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  function exit() {
    logout();
    history.push("/");
  }

  return (
    <s.Container>
      <s.Top>
        <s.Logo>
          <img src={imgLogo} alt="Logo TelNet" />
        </s.Logo>
        <s.Menu>
          <s.Linked to="/">Home</s.Linked>
          <s.Linked to="/simular">Simular</s.Linked>
          <s.Linked to="/planos">Planos</s.Linked>
          <s.Linked to="/tarifas">Tarifas</s.Linked>
          <s.Linked to="/login">Login</s.Linked>
          <s.ButtonLink onClick={() => exit()}>Sair</s.ButtonLink>
        </s.Menu>
      </s.Top>
    </s.Container>
  );
}

export default Header;
