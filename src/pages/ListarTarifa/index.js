import React, { useEffect, useState } from "react";

import { FiTrash2 } from "react-icons/fi";

import * as s from "./styles";
import Main from "../Layout/Main";
import api from "../../services/api";

const ListarTarifa = (props) => {
  const [tariff, setTariff] = useState([]);

  useEffect(() => {
    api.get("tariff").then((response) => {
      setTariff(response.data);
    });
  });

  async function handleDeletePlan(id) {
    try {
      await api.delete(`tariff/${id}`);

      setTariff(tariff.filter((tar) => tar.id !== id));
    } catch (err) {
      alert("Erro ao deletar a Tarifa, tente novamente.");
    }
  }
  return (
    <Main>
      <s.Body>
        <s.BodyParagraph>
          <s.Title>Listagem Tarifa.</s.Title>

          <s.List>
            {tariff.map((tar) => (
              <s.ItemList key={tar.id}>
                <div>
                  <p>
                    <strong>Origem: </strong>
                    {tar.origin}
                  </p>
                  <p>
                    <strong>Destino: </strong>
                    {tar.destiny}
                  </p>
                  <p>
                    <strong>Valor: </strong>
                    {tar.price}
                  </p>
                </div>
                <s.ButtonTrash
                  type="button"
                  onClick={() => handleDeletePlan(tar.id)}
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </s.ButtonTrash>
              </s.ItemList>
            ))}
          </s.List>
          <s.Linked to="/cadastrartarifa">
            <s.ButtonSubmit>Cadastrar</s.ButtonSubmit>
          </s.Linked>
        </s.BodyParagraph>
      </s.Body>
    </Main>
  );
};

export default ListarTarifa;
