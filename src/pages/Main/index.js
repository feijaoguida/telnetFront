import React from "react";

import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";

import * as s from "./styles";

function Main() {
  return (
    <>
      <Header />

      <s.Container>
        <Aside>Barra Lateral</Aside>
        <s.Body>
          <s.Title>Cadastro</s.Title>
          <s.Form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Telefone" />

            <s.ButtonSubmit>Cadastrar</s.ButtonSubmit>
          </s.Form>
        </s.Body>
      </s.Container>

      <Footer />
    </>
  );
}

export default Main;
