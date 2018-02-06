// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const H1 = ({ children, className }) => (
  <h1 className={className}>{children}</h1>
);

H1.propTypes = {
  children: T.node,
  className: T.string
};

export default H1;
