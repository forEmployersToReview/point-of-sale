// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Span = ({ children, className, id, onClick }) => (
  <span id={id} className={className} onClick={onClick}>
    {children}
  </span>
);

Span.propTypes = {
  children: T.node,
  className: T.string,
  id: T.number
};

export default Span;
