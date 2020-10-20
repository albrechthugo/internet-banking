import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

import LeftSide from '../../components/LeftSide';
import Header from '../../components/Header';
import RightSide from '../../components/RightSide';
import Graphic from '../../components/Graphic';

const Dashboard = () => {
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
    <div id="dashboard__container">
      <LeftSide 
        saldo={saldo}
        agencia={agencia}
        conta={conta}
        digito={digito}
      />

      <main className="dashboard__main">
        <Header 
          nome={nome}
          cnpj={cnpj}
        />
      
        <section>
          <Graphic />
        </section>

        <footer>
          <a href="">
            Política de Privacidade
          </a>

          <a href="">
            Saiba mais sobre segurança
          </a>
          
          <a href="">
            Trabalhe Conosco
          </a>
        </footer>
      
      </main>

      <RightSide />
    </div>
  );
}

export default Dashboard;