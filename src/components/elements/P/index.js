// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const P = ({ children, className }) => (
  <p className={className}>{children}</p>
);

P.propTypes = {
  children: T.node,
  className: T.string
}
export default P;
