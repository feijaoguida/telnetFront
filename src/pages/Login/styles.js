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
`;

export const bodyLeft = styled.div`
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
`;

export const Title = styled.p`
  color: #fff;
  text-align: center;
  font-size: 3em;
  font-weight: 800;
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

  :focus {
    outline: none;
    box-shadow: 0 4px 4px rgba(255, 255, 255, 0.5);
  }
`;

export const FormikErrorMessage = styled(ErrorMessage)`
  color: red;
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
