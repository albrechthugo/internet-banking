import React, { useEffect, useState } from 'react';

import './styles.css';

import api from '../../services/api';

import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import CardsDetail from '../../components/CardsDetail';
import Header from '../../components/Header';

const Cards = () => {
  const idEmpresa = localStorage.getItem('id');

  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [saldo, setSaldo] = useState('');
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');
  const [digito, setDigito] = useState('');

  useEffect(() => {
    api.get(`/empresas/?id=${idEmpresa}`).then(response => {
      const data = response.data[0];
      
      setNome(data.nomeEmpresa);
      setCnpj(data.cnpj);
      setSaldo(data.saldo);
      setAgencia(data.dadosBancario.agencia);
      setConta(data.dadosBancario.conta);
      setDigito(data.dadosBancario.digitoConta);
    })
  }, []);

  return (
    <div id="cards__container">
      <LeftSide 
        saldo={saldo}
        agencia={agencia}
        conta={conta}
        digito={digito}
      />

      <main className="cards__main">
        <Header 
          nome={nome}
          cnpj={cnpj}
        />
 
        <section>
          <CardsDetail />
        </section>

      </main>

      <RightSide />
    </div>
  );
}

export default Cards;