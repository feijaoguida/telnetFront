import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import * as s from "./styles";

import api from "../../services/api";

import Main from "../Layout/Main";
import { getToken } from "../../services/auth";

const validations = yup.object().shape({
  idTariff: yup.string().required("Informa a Origem!"),
  period: yup.string().required("Informe o tempo medio!"),
  idPlans: yup.string().required("Escolha um Plano!"),
});

function Simulate() {
  const token = getToken();
  const [simulates, setSimulate] = useState("");
  const [tariff, setTariff] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadTariff() {
      const response = await api.get("/tariff", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setTariff(response.data);
    }
    loadTariff();

    async function loadPlans() {
      const response = await api.get("/plans", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setPlans(response.data);
    }
    loadPlans();
  }, [token]);

  async function handleSubmit(values) {
    try {
      const response = await api.post("/simulacao", values, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setSimulate(response.data);
    } catch (err) {
      alert("Erro ao fazer a Simulação, tente novamente.");
    }
  }

  return (
    <Main>
      <s.Body>
        <Formik
          initialValues={{
            idTariff: "",
            period: "",
            idPlans: "",
            comfalemais: "",
            semfalemais: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <s.FormikForm>
            <s.Title>Simular Planos.</s.Title>
            <s.Fields>
              <s.FormGroup>
                <s.FormikField
                  name="idTariff"
                  component="select"
                  placeholder="Origem"
                >
                  <option value="" label="Localização" />
                  {tariff.map((tar) => (
                    <option key={tar.id} value={tar.id} label>
                      Origem: {tar.origin} - Destino: {tar.destiny} - Valor:{" "}
                      {tar.price}
                    </option>
                  ))}
                </s.FormikField>
                <s.FormikErrorMessage component="span" name="idTariff" />
              </s.FormGroup>
              <s.FormGroup>
                <s.FormikField name="period" type="text" placeholder="Tempo" />
                <s.FormikErrorMessage component="span" name="period" />
              </s.FormGroup>
              <s.FormGroup>
                <s.FormikField name="idPlans" component="select">
                  <option value="" label="Plano" />
                  {plans.map((plan) => (
                    <option key={plan.id} value={plan.id} label>
                      {plan.description} - {plan.period}
                    </option>
                  ))}
                </s.FormikField>
                <s.FormikErrorMessage component="span" name="idPlans" />
              </s.FormGroup>
            </s.Fields>
            <s.ButtonSubmit type="submit">Simular</s.ButtonSubmit>
          </s.FormikForm>
        </Formik>
      </s.Body>

      <s.Body>
        <s.Card>
          <s.Title>Simulação.</s.Title>
          <s.Description>
            <p>
              <strong>Valor com Fale Mais: </strong>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(simulates.comFaleMais)}
            </p>
            <p>
              <strong>Valor sem Fale Mais: </strong>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(simulates.semFaleMais)}
            </p>
          </s.Description>
          <s.Alert>{simulates.Error}</s.Alert>
        </s.Card>
      </s.Body>
    </Main>
  );
}

export default Simulate;
