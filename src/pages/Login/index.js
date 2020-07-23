import React from "react";
import * as yup from "yup";

import { withFormik } from "formik";

import * as s from "./styles";

import image from "../../assets/password.svg";

import LoginContainer from "../Layout/Login";

const validations = yup.object().shape({
  user: yup
    .string()
    .email("Informe um email válido!")
    .required("Informe um email!"),
  password: yup
    .string()
    .min(8, "O nome deve conter mais de 8 caracteres!")
    .required("Informe uma senha!"),
});

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ user: "", password: "" }),
  handleSubmit: (values) => {
    console.log(values);
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: "Login",
  validationSchema: validations,
});

const Login = (props) => {
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

          <s.FormikForm>
            <div className="Form-Group">
              <s.FormikField name="user" placeholder="Usuário" type="text" />
              <s.FormikErrorMessage component="span" name="user" />
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
        </s.ContainerRight>
      </s.Container>
    </LoginContainer>
  );
};

export default enhanceWithFormik(Login);
