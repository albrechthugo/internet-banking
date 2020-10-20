import React from 'react';

import './styles.css';

const Header = (props) => {
  return (
    <header className="header__container">
      <strong>
        Bem-vindo, <p>{props.nome}</p>
      </strong>

      <span>
        CNPJ: {props.cnpj}
      </span>
    </header>
  );
};

export default Header;