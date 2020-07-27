import styled from "styled-components";

import { ErrorMessage, Form, Field } from "formik";

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
  padding: 0.5em 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

export const FormikErrorMessage = styled(ErrorMessage)`
  color: red;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 10px;
  margin: 10px auto 20px auto;
`;

export const FormikField = styled(Field)`
  padding: 15px;
  width: 90%;
  border: none;
  margin: 5px auto;
  font-size: 1.2em;
  border-radius: 5px;
  background: rgba(253, 132, 104, 0.1);

  :focus {
    border: 0.5px solid #fd8468;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px auto;
`;

export const ButtonSubmit = styled.button`
  color: #fff;
  padding: 15px 15px;
  background-color: #434343;
  border: none;
  font-size: 1.2em;
  margin: 5px auto;
  border-radius: 5px;
  width: 40%;

  :hover {
    background-color: #000;
  }
`;
