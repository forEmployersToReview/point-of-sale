// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const H2 = ({ children, className }) => (
  <h2 className={className}>{children}</h2>
);

H2.propTypes = {
  children: T.node,
  className: T.string
};

export default H2;
