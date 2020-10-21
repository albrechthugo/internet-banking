import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from "../../services/api";

const RightSide = () => {
  const [transactions, setTransactions] = useState([]);

  const idEmpresa = localStorage.getItem('id');

  useEffect(() => {
    api.get(`/transacoes/?id=${idEmpresa}`).then(response => {
      setTransactions(response.data);
    })
  }, [idEmpresa]);

  const lastTransactions = transactions.slice(0, 6)

  return (
    <div id="right-side__container">
      <span>
        Últimas transações
      </span>

      <div className="right-side__transation container">
        { lastTransactions.map((transaction, index) => {
          if(!transaction.estabelecimento) {
            transaction.estabelecimento = transaction.descricaoTransacao
          } else {
            return (
              <div key={index} className="right-side__transation">
                <p >
                  {transaction.estabelecimento}
                </p>
                <strong className="right-side__value">
                  R${transaction.valor}
                </strong>
              </div>
            );
          }
        }) }
      </div>
    
      <Link 
        to="/dashboard/details/" 
        className="right-side__link"
      >
        <p className="right-side__link">
          Ver todas as transações
        </p>
      </Link>
    </div>
  );
}

export default RightSide;