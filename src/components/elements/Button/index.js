// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Button = ({ text, handleClick, className }) => (
  <button className={className} onClick={handleClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: T.string,
  handleClick: T.func,
  className: T.string
};

export default Button;
