import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 30%;
  max-width: 480px;
  background-color: #f5f5f5;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 678px) {
    display: none;
  }
`;
