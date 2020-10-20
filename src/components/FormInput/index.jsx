import React, { useState, useEffect } from 'react';

import './styles.css';

const FormInput = (props) => {
  const [empresa, setEmpresa] = useState('');

  const getInputText = (event) => {
    setEmpresa(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('id', empresa)
  }, [empresa]);

  return (
    <div className="login__form email">
      <label>
        {props.title}
      </label>
        <input type="text" onChange={getInputText} value={empresa}/>
    </div>
  );
}

export default FormInput;