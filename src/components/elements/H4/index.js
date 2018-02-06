// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const H4 = ({ children, className }) => (
  <h4 className={className}>{children}</h4>
);

H4.propTypes = {
  children: T.node,
  className: T.string
};

export default H4;
