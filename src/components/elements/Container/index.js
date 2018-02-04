// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Container = ({ children, className, id }) => (
  <div id={id} className={className}>
    {children}
  </div>
);

Container.propTypes = {
  children: T.node,
  className: T.string,
  id: T.number
};

export default Container;
