import React from "react";

import * as s from "./styles";

import image from "../../assets/password.svg";

function Login() {
  return (
    <s.Container>
      <s.ContainerLeft>
        <s.bodyLeft>
          <p>TelNet</p>
          <span>Levando qualidade com um preço que cabe no seu bolso.</span>
          <img src={image} alt="" />
        </s.bodyLeft>
      </s.ContainerLeft>
      <s.ContainerRight>
        <s.Title>Faça seu Login:</s.Title>
        <s.Form onSubmit={() => {}}>
          <input type="text" placeholder="Login" />
          <input type="text" placeholder="Senha" />
        </s.Form>
        <s.ButtonSubmit>Logar</s.ButtonSubmit>
      </s.ContainerRight>
    </s.Container>
  );
}

export default Login;
