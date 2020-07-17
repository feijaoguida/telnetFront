import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: #fff;
  border: solid 1px #fff;

  box-shadow: 0px 10px 9px 4px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: 0px 10px 9px 4px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 0px 10px 9px 4px rgba(0, 0, 0, 0.37);

  @media (max-width: 678px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  img {
    width: 70px;
    height: 70px;
  }
`;
