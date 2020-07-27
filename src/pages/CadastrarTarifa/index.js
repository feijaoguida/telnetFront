import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import Main from "../Layout/Main";

import * as s from "./styles";

const validations = yup.object().shape({
  origin: yup.string().required("Informe o DDD de Origem!"),
  destiny: yup.string().required("Informe o DDD de Destino!"),
  price: yup.string().required("Informe o valor da Tarifa"),
});

function CadastrarTarifa() {
  const history = useHistory();

  async function handleSubmit(values) {
    console.log("estou aqui" + values);
    try {
      await api.post("/tariff", values);
      history.push("/tarifas");
    } catch (err) {
      alert("Erro ao cadastrar a Tarifa, tente novamente.");
    }
  }
  return (
    <Main>
      <s.Body>
        <Formik
          initialValues={{
            origin: "",
            destiny: "",
            price: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <s.FormikForm>
            <s.Title>Cadastrar Tarifa</s.Title>
            <s.Fields>
              <s.FormGroup>
                <s.FormikField name="origin" type="text" placeholder="Origem" />
                <s.FormikErrorMessage component="span" name="origin" />
              </s.FormGroup>

              <s.FormGroup>
                <s.FormikField
                  name="destiny"
                  type="text"
                  placeholder="Destino"
                ></s.FormikField>
                <s.FormikErrorMessage component="span" name="destiny" />
              </s.FormGroup>

              <s.FormGroup>
                <s.FormikField
                  name="price"
                  type="text"
                  placeholder="Valor da Tarifa ex.: 1.95"
                ></s.FormikField>
                <s.FormikErrorMessage component="span" name="price" />
              </s.FormGroup>
            </s.Fields>
            <s.ButtonSubmit type="submit">Cadastrar</s.ButtonSubmit>
          </s.FormikForm>
        </Formik>
      </s.Body>
    </Main>
  );
}

export default CadastrarTarifa;
