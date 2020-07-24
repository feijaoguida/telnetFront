import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import Main from "../Layout/Main";

import * as s from "./styles";

const validations = yup.object().shape({
  description: yup.string().required("Informa uma descrição!"),
  period: yup.string().required("Informe um valor para o tempo!"),
});

function CadastrarPlano() {
  const history = useHistory();

  async function handleSubmit(values) {
    try {
      await api.post("plans/", values);
      history.push("/planos");
    } catch (err) {
      alert("Erro ao cadastrar o Plano, tente novamente.");
    }
  }
  return (
    <Main>
      <s.Body>
        <s.Title>Cadastrar Plano.</s.Title>
        <Formik
          initialValues={{ description: "", period: "" }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <s.FormikForm>
            <s.Fields>
              <div className="Form-Group">
                <s.FormikField
                  name="description"
                  type="text"
                  placeholder="Descrição"
                />
                <s.FormikErrorMessage component="span" name="description" />
              </div>

              <div className="Form-Group">
                <s.FormikField
                  name="period"
                  type="text"
                  placeholder="Tempo"
                ></s.FormikField>
                <s.FormikErrorMessage component="span" name="period" />
              </div>
            </s.Fields>
            <s.ButtonSubmit type="submit">Cadastrar</s.ButtonSubmit>
          </s.FormikForm>
        </Formik>
      </s.Body>
    </Main>
  );
}

export default CadastrarPlano;
