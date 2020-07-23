import React from "react";

import Header from "../../../components/Header";

import Aside from "../../../components/Aside";
import Footer from "../../../components/Footer";

//import RoutesNew from "../../routesNew";

import * as s from "./styles";

import Container from "../../../components/Container";

function Main({ children }) {
  return (
    <>
      <s.Container>
        <Aside>Barra Lateral</Aside>
        <s.Conteudo>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </s.Conteudo>
      </s.Container>
    </>
  );
}

export default Main;
