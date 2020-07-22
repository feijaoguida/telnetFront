import React from "react";

import * as s from "./styles";

import imgLogo from "../../assets/rocket_launch.svg";

function Header() {
  return (
    <s.Container>
      <s.Top>
        <s.Logo>
          <img src={imgLogo} alt="Logo TelNet" />
        </s.Logo>
        <s.Menu>
          <s.Linked to="/">Home</s.Linked>
          <s.Linked to="/Cadastrar">Cadastrar Planos</s.Linked>
          <s.Linked to="/Simular">Simular Planos</s.Linked>
        </s.Menu>
      </s.Top>
    </s.Container>
  );
}

export default Header;
