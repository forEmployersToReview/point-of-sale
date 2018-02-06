// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Icon = ({ onClick, icon, className, id }) => (
  <i className={`material-icons ${className}`} onClick={onClick}>
    {icon}
  </i>
);

Icon.propTypes = {
  onClick: T.func,
  icon: T.string,
  target_class: T.string,
  id: T.string
};

export default Icon;
