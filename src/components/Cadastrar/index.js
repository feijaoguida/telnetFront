import React from "react";

import * as s from "./styles";

const Home = (props) => {
  return (
    <s.Body>
      <s.Title>Cadastro</s.Title>
      <s.Form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefone" />
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefone" />

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefone" />

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefone" />

        <s.ButtonSubmit>Cadastrar</s.ButtonSubmit>
      </s.Form>
    </s.Body>
  );
};

export default Home;
