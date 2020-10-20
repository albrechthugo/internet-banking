import React, {useEffect, useState} from 'react';

import './styles.css';
import api from "../../services/api";

const CardsDetail = () => {
  const idEmpresa = localStorage.getItem('id');

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get(`/transacoes/?id=${idEmpresa}`).then(response => {
      setTransactions(response.data);
    })
  }, []);

  const normalizedTransactions = transactions.reduce((acc, current) => {
    const currentFinalCartao = current.finalCartao
    const exists = acc.some(({ id }) => id === currentFinalCartao)

    if (exists || !currentFinalCartao) {
      return acc
    }

    return acc = [
      ...acc, {
        id: currentFinalCartao,
        transactions: transactions.filter(({ finalCartao }) => finalCartao === currentFinalCartao)
      }
    ]
  }, [])

  return (
    <section className="cards__detail container">
      <h1>
        Cartões
      </h1>

      <div className="cards__wrapper">
        <div className="cards__wrapper card detail">
          { normalizedTransactions.map((card, index) => {
              return (
                  <table>
                    <tbody>
                    <tr>
                      <th className="card info">Cartão #{index + 1}</th>
                      <th className="card info">Final: {card.id}</th>
                      <th className="card info">Validade: 02/2026</th>
                      <th className="card info">Status: Ativo</th>
                    </tr>
                    <tr>
                      <th className="transation header">Data</th>
                      <th className="transation header">Descrição</th>
                      <th className="transation header">Estabelecimento</th>
                      <th className="transation header">Valor</th>
                    </tr>

                    { card.transactions.map(transaction => {
                      const date = Date.parse(transaction.dataTransacao);
                      const day = new Date(date).getDate();
                      const month = new Date(date).getMonth();
                      const year = new Date(date).getFullYear();

                      return (
                          <tr>
                            <td className="transation info">
                              {`${day}/${month}/${year}`}
                            </td>
                            <td className="transation info">
                              {transaction.descricaoTransacao}
                            </td>
                            <td className="transation info">
                              {transaction.estabelecimento}
                            </td>
                            <td className="transation info">
                              R$ {transaction.valor}
                            </td>
                          </tr>
                      );
                    }) }
                    </tbody>
                  </table>
              );
          }) }

        </div>
      </div>
    </section>
  );
}

export default CardsDetail;