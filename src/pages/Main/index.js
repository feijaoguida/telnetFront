import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../../components/Header";

import Aside from "../../components/Aside";
import Footer from "../../components/Footer";

import RoutesNew from "../../routesNew";
import GlobalStyle from "../../styles/global";

import * as s from "./styles";

function Main() {
  return (
    <>
      <GlobalStyle />
      <s.Container>
        <BrowserRouter>
          <Aside>Barra Lateral</Aside>
          <s.Conteudo>
            <Header />
            <RoutesNew />
            <Footer />
          </s.Conteudo>
        </BrowserRouter>
      </s.Container>
    </>
  );
}

export default Main;
