import React from "react";

import * as yup from "yup";

import { withFormik } from "formik";

import * as s from "./styles";

import Main from "../Layout/Main";

const validations = yup.object().shape({
  origem: yup.string().required("Informa a Origem!"),
  destino: yup.string().required("Informe o Destino!"),
  tempo: yup.string().required("Informe o tempo medio!"),
  plano: yup.string().required("Escolha um Plano!"),
});

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({
    origem: "",
    destino: "",
    tempo: "",
    plano: "",
    comfalemais: "",
    semfalemais: "",
  }),
  handleSubmit: (values) => {
    console.log(values);
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: "Simular",
  validationSchema: validations,
});

const Simular = (props) => {
  return (
    <Main>
      <s.Body>
        <s.Title>Simular Planos.</s.Title>
        <s.FormikForm>
          <s.Fields>
            <div className="Form-Group">
              <s.FormikField name="origem" type="text" placeholder="Origem" />
              <s.FormikErrorMessage component="span" name="origem" />
            </div>
            <div className="Form-Group">
              <s.FormikField name="destino" as="select" placeholder="Destino">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </s.FormikField>
              <s.FormikErrorMessage component="span" name="destino" />
            </div>
            <div className="Form-Group">
              <s.FormikField name="tempo" as="select" placeholder="Tempo">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </s.FormikField>
              <s.FormikErrorMessage component="span" name="tempo" />
            </div>
            <div className="Form-Group">
              <s.FormikField name="plano" as="select" placeholder="Plano">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </s.FormikField>
              <s.FormikErrorMessage component="span" name="plano" />
            </div>
            <div className="Form-Group">
              <s.FormikField
                name="comfalemais"
                type="text"
                placeholder="Com FaleMais"
              />
            </div>
            <div className="Form-Group">
              <s.FormikField
                name="semfalemais"
                type="text"
                placeholder="Sem FaleMais"
              />
            </div>
          </s.Fields>
          <s.ButtonSubmit>Cadastrar</s.ButtonSubmit>
        </s.FormikForm>
      </s.Body>
    </Main>
  );
};

export default enhanceWithFormik(Simular);
