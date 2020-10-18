import React from 'react';

import './styles.css';

const FormInput = (props) => {
  return (
    <div className="login__form email">
      <label>
        {props.title}
      </label>
        <input type="text"/>
    </div>
  );
}

export default FormInput;