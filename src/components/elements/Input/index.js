// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Input = ({ placeHolder, className, type, id }) => (
  <input type={type} id={id} className={className} placeholder={placeHolder} />
);

Input.propTypes = {
  placeHolder: T.string,
  className: T.string,
  type: T.string,
  id: T.number
};

export default Input;
