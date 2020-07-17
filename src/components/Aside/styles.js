import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 30%;
  max-width: 480px;
  background-color: #f5f5f5;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in 0s;

  @media (max-width: 678px) {
    display: none;
  }
`;
