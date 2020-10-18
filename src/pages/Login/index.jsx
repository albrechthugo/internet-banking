import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { GiReceiveMoney } from 'react-icons/gi';
import FormInput from '../../components/FormInput';

const Login = () => {
  return (
    <div id="login__container">
      <main>
        <aside className="login__hero image"></aside>
        <section className="login__content">
          <form className="login__form">
            <div className="login__form content">
              <GiReceiveMoney size={50}/>

              <div className="login__form description">
                <p>
                  <strong>Bem-vindo </strong>
                  ao Internet <br/> Banking da Conta Simples
                </p>
                <span>
                  Preencha os campos abaixo para acessar sua conta
                </span>
              </div>

              <FormInput title="Endereço de e-mail" />
              <FormInput title="Senha" />
              
              <Link to="/dashboard">
                <div className="login__form submit-button">
                  <p>Entrar</p>
                </div>
              </Link>
        
              <a href="/" className="login__form forget-password">
                Esqueci minha senha
              </a>
            </div>
          
          <footer className="login__footer">
            <p>Não tem uma <br/> conta?</p>
            <a href="/">Abra uma Conta Simples</a>
          </footer>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;