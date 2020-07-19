import React from "react";

import * as s from "./styles";

const Home = (props) => {
  return (
    <s.Body>
      <s.BodyParagraph>
        <s.Title>TelNet - Telefonia</s.Title>
        <hr />
        <s.Paragraph>
          <span>Somos a empresa do grupo TelNet-Telecom</span> que atua no setor
          de Telecom há mais de 50 anos com dois objetivos principais: manter um
          relacionamento próximo com os nossos clientes e oferecer serviços de
          alta qualidade.
        </s.Paragraph>
        <s.Paragraph>
          <span>
            SOLUÇÕES <br />
            COMPLETAS PARA:{" "}
          </span>{" "}
          <br />A TelNet faz parte do seu dia a dia em casa, no trabalho e com a
          indústria de telecomunicação do Brasil, oferecendo soluções de
          Telecom, por meio de um atendimento próximo como você nunca viu:
        </s.Paragraph>
      </s.BodyParagraph>
    </s.Body>
  );
};

export default Home;
