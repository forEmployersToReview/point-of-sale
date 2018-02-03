import React from 'react';

const Input = ({ placeHolder, className, type, id }) => (
  <input type={type} id={id} className={className} placeholder={placeHolder} />
);

export default Input;
