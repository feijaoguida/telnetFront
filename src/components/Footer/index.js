import React from "react";

import * as s from "./styles";

import imgLogo from "../../assets/rocket_launch.svg";

function Footer() {
  return (
    <s.Container>
      <s.Logo>
        <img src={imgLogo} alt="Logo TelNet" />
      </s.Logo>
    </s.Container>
  );
}

export default Footer;
