// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const Icon = ({ handle_icon, icon, className, id }) => (
  <i className={`material-icons ${className}`} onClick={handle_icon}>
    {icon}
  </i>
);

Icon.propTypes = {
  handle_icon: T.func,
  icon: T.string,
  target_class: T.string,
  id: T.string
};

export default Icon;
