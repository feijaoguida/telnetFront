import styled from "styled-components";

import { ErrorMessage, Form, Field } from "formik";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`;

export const ContainerLeft = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const bodyRegisterLeft = styled.div`
  color: #6c7a89;
  text-align: center;

  p {
    font-size: 3em;
    font-weight: 800;
  }

  span {
    font-size: 1.5em;
  }

  img {
    height: 50vh;
    width: 50vw;
    margin: 20px auto;

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const ContainerRight = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  background-color: #fd8468;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    position: relative;
  }
`;

export const Title = styled.p`
  color: #fff;
  text-align: center;
  font-size: 2.5em;
  font-weight: 800;
  margin: 20px 0;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  .Form-Group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const FormikField = styled(Field)`
  padding: 5px;
  width: 80%;
  border: none;
  margin: 5px auto;
  font-size: 1.2em;
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.25);
  transition: all 0.1s linear;

  :focus,
  :hover {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const FormikErrorMessage = styled(ErrorMessage)`
  color: red;
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
