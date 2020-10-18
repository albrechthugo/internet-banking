import React from 'react';

import './styles.css';

const Options = (props) => {
  return (
    <div className="left-side__option">
      <p>
        {props.text}
      </p>
    </div>
  );
}

export default Options;