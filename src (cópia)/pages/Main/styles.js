import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  overflow-y: scroll;
  position: relative;
  flex: 1 1 0%;
`;

export const Body = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  flex: 1 1 0%;
  padding: 20px 0 0 20px;
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 2.5em;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 10px;
  margin: 10px auto 20px auto;

  input {
    padding: 12px;
    width: 80%;
    border: 0.5px #f5f5f5 solid;
    margin: 10px auto;
    font-size: 1.2em;
    border-radius: 5px;
  }
`;

export const ButtonSubmit = styled.button`
  color: #fff;
  padding: 5px 15px;
  background-color: #000;
  border: none;
  font-size: 1.2em;
  margin: 5px auto;
  border-radius: 5px;
`;
