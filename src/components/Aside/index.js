import React from "react";

import { Container } from "./styles";

import backgroundImg from "../../assets/fundo.jpg";

function Aside() {
  return (
    <Container>
      <img src={backgroundImg} alt="" />
    </Container>
  );
}

export default Aside;
