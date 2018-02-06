// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Button = ({ children, handleClick, className }) => (
  <button className={className} onClick={handleClick}>
    {children}
  </button>
);

Button.propTypes = {
  text: T.string,
  handleClick: T.func,
  className: T.string
};

export default Button;
