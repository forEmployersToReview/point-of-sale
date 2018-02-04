// Modules
import React from 'react';
import { PropTypes as T } from 'prop-types';

const DisplayIcons = ({ networks }) =>
  networks.map((social, index) => (
    <i key={`${social}${index}`} className={`${social} network`} />
  ));

DisplayIcons.propTypes = {
  network: T.arrayOf(T.string)
};

export default DisplayIcons;
