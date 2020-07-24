import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import * as s from "./styles";
import api from "../../services/api";

import image from "../../assets/wall.svg";

import LoginContainer from "../Layout/Login";

const validations = yup.object().shape({
  name: yup.string().required("Informe seu nome completo!"),
  email: yup
    .string()
    .email("Informe um email válido!")
    .required("Informe um email!"),
  password: yup
    .string()
    .min(8, "O nome deve conter mais de 8 caracteres!")
    .required("Informe uma senha!"),
  validatePassword: yup
    .string()
    .min(8, "O nome deve conter mais de 8 caracteres!")
    .oneOf([yup.ref("password"), null], "Senha não conferi"),
});

function Register() {
  const history = useHistory();

  async function handleSubmit(values) {
    try {
      await api.post("/user", values);
      history.push("/login");
    } catch (err) {
      alert("Erro ao cadastrar o usuário, tente novamente.");
    }
  }

  return (
    <LoginContainer>
      <s.Container>
        <s.ContainerLeft>
          <s.bodyRegisterLeft>
            <p>TelNet</p>
            <span>Levando qualidade com um preço que cabe no seu bolso.</span>
            <img src={image} alt="" />
          </s.bodyRegisterLeft>
        </s.ContainerLeft>
        <s.ContainerRight>
          <s.Title>Faça seu Login:</s.Title>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              validatePassword: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            <s.FormikForm>
              <div className="Form-Group">
                <s.FormikField name="name" placeholder="Usuário" type="text" />
                <s.FormikErrorMessage component="span" name="name" />
              </div>
              <div className="Form-Group">
                <s.FormikField name="email" placeholder="Email" type="email" />
                <s.FormikErrorMessage component="span" name="email" />
              </div>
              <div className="Form-Group">
                <s.FormikField
                  name="password"
                  placeholder="Senha"
                  type="password"
                />
                <s.FormikErrorMessage component="span" name="password" />
              </div>
              <div className="Form-Group">
                <s.FormikField
                  name="validatePassword"
                  placeholder="Confirme a senha"
                  type="password"
                />
                <s.FormikErrorMessage
                  component="span"
                  name="validatePassword"
                />
              </div>
              <s.ButtonSubmit type="submit">Registrar</s.ButtonSubmit>
            </s.FormikForm>
          </Formik>
        </s.ContainerRight>
      </s.Container>
    </LoginContainer>
  );
}

export default Register;
