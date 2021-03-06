import React from "react";

import * as yup from "yup";
import { Formik } from "formik";

import * as s from "./styles";
import image from "../../assets/password.svg";
import LoginContainer from "../Layout/Login";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido!")
    .required("Informe um email!"),
  password: yup
    .string()
    .min(8, "O nome deve conter mais de 8 caracteres!")
    .required("Informe uma senha!"),
});

function Login() {
  async function handleSubmit({ email, password }) {
    console.log(email, password);
    //try {
    //await api.post("/user", values);
    //history.push("/login");
    //} catch (err) {
    //  alert("Erro ao cadastrar o usuário, tente novamente.");
    // }
  }

  return (
    <LoginContainer>
      <s.Container>
        <s.ContainerLeft>
          <s.bodyLeft>
            <p>TelNet</p>
            <span>Levando qualidade com um preço que cabe no seu bolso.</span>
            <img src={image} alt="" />
          </s.bodyLeft>
        </s.ContainerLeft>
        <s.ContainerRight>
          <s.Title>Faça seu Login:</s.Title>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            <s.FormikForm>
              <div className="Form-Group">
                <s.FormikField name="email" placeholder="Email" type="text" />
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
              <s.ButtonSubmit type="submit">Logar</s.ButtonSubmit>
            </s.FormikForm>
          </Formik>
          <s.Linked to="/registrar">Faça o seu registro.</s.Linked>
        </s.ContainerRight>
      </s.Container>
    </LoginContainer>
  );
}

export default Login;
