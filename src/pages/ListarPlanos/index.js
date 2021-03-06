import React, { useEffect, useState } from "react";

import { FiTrash2 } from "react-icons/fi";

import * as s from "./styles";
import Main from "../Layout/Main";
import api from "../../services/api";

const ListarPlanos = (props) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api.get("plans").then((response) => {
      setPlans(response.data);
    });
  });

  async function handleDeletePlan(id) {
    try {
      await api.delete(`plans/${id}`);

      setPlans(plans.filter((plan) => plan.id !== id));
    } catch (err) {
      alert("Erro ao deletar o Plano, tente novamente.");
    }
  }
  return (
    <Main>
      <s.Body>
        <s.BodyParagraph>
          <s.Title>TelNet - Telefonia</s.Title>

          <s.List>
            {plans.map((plan) => (
              <s.ItemList key={plan.id}>
                <div>
                  <p>
                    <strong>Descrição: </strong>
                    {plan.description}
                  </p>
                  <p>
                    <strong>Tempo: </strong>
                    {plan.period}
                  </p>
                </div>
                <s.ButtonTrash
                  type="button"
                  onClick={() => handleDeletePlan(plan.id)}
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </s.ButtonTrash>
              </s.ItemList>
            ))}
          </s.List>
          <s.Linked to="/cadastrarplano">
            <s.ButtonSubmit>Cadastrar</s.ButtonSubmit>
          </s.Linked>
        </s.BodyParagraph>
      </s.Body>
    </Main>
  );
};

export default ListarPlanos;
