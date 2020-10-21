import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';

const ExtractDetail = () => {
  const idEmpresa = localStorage.getItem('id');

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get(`/transacoes/?id=${idEmpresa}`).then(response => {
      setTransactions(response.data);
    })
  }, [idEmpresa]);

  return (
    <section className="extract__container a">
      <div className="extract__title">
        <h1>
          Extrato
        </h1>
        <div className="extract__title filter">
          <span>
            Filtrar:
          </span>
          <strong>
            Débito
          </strong>
          <strong>
            Crédito
          </strong>
        </div>
      </div>

      <div className="extract__wrapper">
        <table>
          <tbody>
            <tr>
              <th>Data</th>
              <th>Lançamento</th>
              <th>Crédito</th>
              <th>Débito</th>
              <th>Valor</th>
            </tr>
            { transactions.map(transaction => {
              const date = Date.parse(transaction.dataTransacao);
              const day = new Date(date).getDate();
              const month = new Date(date).getMonth();
              const year = new Date(date).getFullYear();

              return (
              <tr>
                <td>
                  {`${day}/${month}/${year}`}
                </td>
                <td>
                  {transaction.descricaoTransacao}
                </td>
                <td>
                  {transaction.descricaoTransacao === 'Compra com cartão de crédito' ? 'Sim' : ''}
                </td>
                <td>
                  {transaction.descricaoTransacao === 'Compra com cartão de crédito' ? '' : ''}
                </td>
                <td>
                  {transaction.valor}
                </td>
              </tr>
              )
            }) }
          </tbody>
          </table>
      </div>

        </section> 
  );
};

export default ExtractDetail;