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

export const FormikField = styled(Field)`
  padding: 5px;
  width: 90%;
  border: none;
  margin: 5px auto;
  font-size: 1.2em;
  border-radius: 5px;

  :hover {
  }
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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px auto;
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

export const Card = styled.div`
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

export const Alert = styled.span`
  font-size: 1.2em;
  color: Red;
`;

export const Description = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;

  p {
    margin: auto 20px;
    font-size: 1.2em;
  }
`;
