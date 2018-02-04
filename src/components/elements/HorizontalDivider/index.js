// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const HR = ({ className }) => <hr className={`${className} default-hr`} />;

HR.propTypes = {
  className: T.string
};

export default HR;
